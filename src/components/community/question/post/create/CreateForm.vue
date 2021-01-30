<template>
  <v-form>
    <v-row>
      <v-col
        cols="3"
        offset="1"
      >
        <v-text-field
          v-model="post.header"
          label="header"
        />
      </v-col>
      <v-col
        cols="2"
        offset="5"
      >
        <v-text-field label="username" />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="10"
      >
        <v-textarea
          v-model="post.body"
          outlined
          rows="10"
          no-resize
          label="body"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col offset="10">
        <v-btn @click="createPost" />
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { getQuestionCommunityReference } from '@/plugins/firebase/firestore/community/reference';
import { createPost } from '@/plugins/firebase/firestore/community';

export default {
  name: 'CreateForm',
  data: () => ({
    post: {
      header: '',
      body: '',
    },
  }),
  methods: {
    createPost() {
      createPost(getQuestionCommunityReference(), this.post)
        .then((doc) => {
          console.log(doc);
          this.$router.back();
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },

};
</script>

<style scoped>

</style>
