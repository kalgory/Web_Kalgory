<template>
  <v-card outlined>
    <v-card-title v-text="post.header" />
    <v-card-text v-text="post.body" />
    <v-card-text v-text="post.createdAt" />
  </v-card>
</template>

<script>
import { readPost } from '@/plugins/firebase/firestore/community';
import { getQuestionCommunityReference } from '@/plugins/firebase/firestore/community/reference';

export default {
  name: 'QuestionPost',

  data: () => ({
    post: {},
  }),

  created() {
    readPost(getQuestionCommunityReference(), this.$route.params.id)
      .then((post) => {
        console.log(post);
        this.post = post;
      })
      .catch((error) => {
        console.error(error);
      });
  },

};
</script>

<style scoped>

</style>
