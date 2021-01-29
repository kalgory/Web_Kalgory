<template>
  <div>
    <v-row>
      <v-col
        cols="3"
        offset="1"
      >
        <v-text-field
          v-model="newPost.header"
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
          v-model="newPost.body"
          outlined
          rows="10"
          no-resize
          label="body"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col offset="10">
        <v-btn @click="clickEvent" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getQuestionCommunityReference } from '@/plugins/firebase/firestore/community/reference';
import { createPost } from '@/plugins/firebase/firestore/community';

export default {
  name: 'CreateCardTemplate',
  data: () => ({
    newPost: {
      header: '',
      body: '',
    },
  }),
  methods: {
    clickEvent() {
      createPost(getQuestionCommunityReference(), this.newPost);
      this.$router.back();
    },
  },

};
</script>

<style scoped>

</style>
