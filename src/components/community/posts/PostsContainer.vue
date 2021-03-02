<template>
  <v-container>
    <v-row
      v-for="item in readCount"
      v-show="isPostsEmpty"
      :key="item"
      justify="center"
    >
      <v-col cols="8">
        <v-card>
          <v-skeleton-loader
            type="table-heading, list-item-two-line"
          />
        </v-card>
      </v-col>
    </v-row>
    <v-row
      v-for="(post,index) in posts"
      v-show="!isPostsEmpty"
      :key="index"
      justify="center"
    >
      <v-col cols="8">
        <iterator-card :post="post" />
      </v-col>
    </v-row>
    <div v-intersect="onIntersect" />
  </v-container>
</template>

<script>
import { readPosts } from '@/plugins/firebase/firestore/community';
import IteratorCard from '@/components/community/posts/iterator/IteratorCard.vue';

export default {
  name: 'PostsContainer',

  components: {
    IteratorCard,
  },

  props: {
    reference: {
      type: Object,
      required: true,
    },
    readCount: {
      type: Number,
      required: false,
      default: 5,
    },
  },

  data: () => ({
    posts: [],
    lastSnapshot: undefined,
    hasPostsToRead: true,
  }),

  computed: {
    isPostsEmpty() {
      return this.posts.length === 0;
    },
  },

  created() {
    this.readPosts();
  },

  methods: {
    onIntersect(entries) {
      if (this.posts.length !== 0 && entries[0].isIntersecting && this.hasPostsToRead) {
        this.readPosts();
      }
    },
    readPosts() {
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
        });
    },
  },
};
</script>
