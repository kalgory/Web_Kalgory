<template>
  <v-data-iterator
    id="scroll-target"
    :items="posts"
    :search="searchText"
    :items-per-page="itemCountPerPage"
    hide-default-footer
  >
    <template #default="props">
      <v-row
        v-for="(post,index) in props.items"
        :key="index"
        justify="center"
      >
        <v-col
          cols="8"
        >
          <data-card :post="post" />
        </v-col>
      </v-row>
      <v-row
        v-intersect="onIntersect"
        justify="center"
      >
        <v-progress-circular
          v-if="isLoading"
          indeterminate
          class="center"
        />
      </v-row>
    </template>
  </v-data-iterator>
</template>

<script>
import { readPosts, getQuestionCommunityReference } from '@/plugins/firebase/firestore/community';
import DataCard from './data/DataCard.vue';

export default {
  name: 'QuestionDataIterator',

  components: {
    DataCard,
  },

  data: () => ({
    isLoading: false,
    posts: [],
    searchText: '',
    lastSnapshot: undefined,
    completeRead: false,
    itemCountPerPage: 3,
  }),
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
      readPosts(getQuestionCommunityReference(), 3, this.lastSnapshot)
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
          this.isLoading = false;
          if (querySnapshot.size !== 3) {
            this.completeRead = true;
          }
          this.itemCountPerPage = this.posts.length;
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
