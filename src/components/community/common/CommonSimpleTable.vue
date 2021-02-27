<template>
  <v-simple-table
    hide-default-footer
  >
    <template #default>
      <v-container>
        <v-row
          v-for="(post,index) in items"
          :key="index"
          justify="center"
        >
          <v-col
            cols="8"
          >
            <data-card
              :data="post"
              :elevation="2"
            />
          </v-col>
        </v-row>
        <v-row
          v-intersect="onIntersect"
        >
          <v-col align="center">
            <v-progress-circular
              v-if="isLoading"
              indeterminate
              class="center"
            />
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-simple-table>
</template>

<script>
import {
  readPosts, getQuestionCommunityReference,
  getInformationCommunityReference, getSubCollectionReference,
} from '@/plugins/firebase/firestore/community';
import DataCard from '@/components/community/common/data/DataCard.vue';

export default {
  name: 'CommonSimpleTable',

  components: {
    DataCard,
  },

  props: {
    targetCollection: {
      type: String,
      required: true,
    },
    readNumber: {
      type: Number,
      required: false,
      default: 3,
    },
    topCollectionReference: {
      type: Object,
      required: false,
      default: undefined,
    },
  },

  data: () => ({
    isLoading: false,
    items: [],
    lastSnapshot: undefined,
    isCompleteRead: false,
  }),

  computed: {
    reference() {
      if (!this.topCollectionReference) {
        if (this.targetCollection === 'QUESTION') {
          return getQuestionCommunityReference();
        }
        return getInformationCommunityReference;
      }
      // TODO comment 생성
      return getSubCollectionReference(this.topCollectionReference, this.$route.params.id,
        this.targetCollection);
    },
  },

  methods: {
    onIntersect(entries) {
      if (entries[0].isIntersecting && !this.isCompleteRead) {
        this.readPosts();
      }
    },
    readPosts() {
      this.isLoading = true;
      readPosts(this.reference, this.readNumber, this.lastSnapshot)
        .then((querySnapshot) => {
          querySnapshot.forEach((snapshot) => {
            this.items.push({
              id: snapshot.id,
              header: snapshot.data().header,
              body: snapshot.data().body,
              createdAt: snapshot.data().created_at,
            });
          });
          this.lastSnapshot = querySnapshot.docs[querySnapshot.size - 1];
          if (querySnapshot.size !== this.readNumber) {
            this.isCompleteRead = true;
          }
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>
