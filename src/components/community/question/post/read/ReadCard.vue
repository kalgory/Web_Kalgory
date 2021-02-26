<template>
  <v-card
    :elevation="0"
  >
    <div v-if="isPostExist">
      <v-card-title v-text="post.header" />
      <v-card-text v-text="post.body" />
      <v-card-text v-text="post.createdAt" />
    </div>
    <div v-if="!isPostExist">
      <h1>Page Not Find</h1>
    </div>
  </v-card>
</template>

<script>
import { readPost, getQuestionCommunityReference } from '@/plugins/firebase/firestore/community';

export default {
  name: 'ReadCard',

  data: () => ({
    post: {},
    isPostExist: true,
  }),

  created() {
    readPost(getQuestionCommunityReference(), this.$route.params.id)
      .then((post) => {
        this.isPostExist = true;
        this.post = post;
      })
      .catch((error) => {
        this.isPostExist = false;
        console.error(error);
      });
  },
};
</script>
