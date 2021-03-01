<template>
  <v-simple-table
    hide-default-footer
  >
    <template #default>
      <v-container>
        <v-row
          v-for="(post,index) in posts"
          :key="index"
          justify="center"
        >
          <v-col
            cols="8"
          >
            <read-card
              :post="post"
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
import { readPosts, getQuestionCollectionReference, getInformationCollectionReference } from '@/plugins/firebase/firestore/community';
import ReadCard from '@/components/community/post/read/ReadCard.vue';

export default {
  name: 'PostsSimpleTable',

  components: {
    ReadCard,
  },

  props: {
    collectionName: {
      type: String,
      required: true,
    },
    readCount: {
      type: Number,
      required: false,
      default: 5,
    },
  },

  data: () => ({
    isLoading: false,
    posts: [],
    lastSnapshot: undefined,
    hasPostsToRead: true,
  }),

  computed: {
    reference() {
      if (this.collectionName === 'QUESTION') {
        return getQuestionCollectionReference();
      }
      return getInformationCollectionReference();
    },
  },

  methods: {
    onIntersect(entries) {
      if (entries[0].isIntersecting && this.hasPostsToRead) {
        this.readPosts();
      }
    },
    readPosts() {
      this.isLoading = true;
      readPosts(this.reference, this.readCount, this.lastSnapshot)
        .then((querySnapshot) => {
          querySnapshot.forEach((snapshot) => {
            this.posts.push({
              id: snapshot.id,
              header: snapshot.data().header,
              body: snapshot.data().body,
              createdAt: snapshot.data().created_at,
            });
          });
          this.lastSnapshot = querySnapshot.docs[querySnapshot.size - 1];
          if (querySnapshot.size !== this.readCount) {
            this.hasPostsToRead = false;
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
