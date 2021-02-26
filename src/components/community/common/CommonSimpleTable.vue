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
      default: 5,
    },
    topCollectionReference: {
      type: Object,
      required: false,
      default: undefined,
    },
  },

  data: () => ({
    isLoading: true,
    items: [],
    searchText: '',
    lastSnapshot: undefined,
    completeRead: false,
    itemCountPerPage: 3,
  }),

  computed: {
    getReference() {
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

  watch: {
    isLoading(isLoading) {
      if (isLoading) this.readPosts();
    },
  },

  created() {
    this.readPosts();
  },

  methods: {
    onIntersect(entries) {
      if (entries[0].isIntersecting && !this.completeRead) {
        this.isLoading = true;
      } else {
        this.isLoading = false;
      }
    },
    readPosts() {
      readPosts(this.getReference, this.readNumber, this.lastSnapshot)
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
          this.isLoading = false;
          if (querySnapshot.size !== this.readNumber) {
            this.completeRead = true;
          }
          this.itemCountPerPage = this.items.length;
        })
        .catch((error) => {
          this.isLoading = false;
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>

</style>
