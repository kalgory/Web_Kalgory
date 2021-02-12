<template>
  <v-form>
    <v-row>
      <v-col
        cols="3"
        offset="1"
      >
        <header-text-field
          v-model="post.header"
          :tab-index="1"
        />
      </v-col>
      <v-col
        cols="2"
        offset="5"
      >
        <v-text-field
          label="username"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        cols="5"
      >
        <body-textarea
          v-model="post.body"
          :tab-index="2"
          :rows="15"
        />
      </v-col>
      <v-col cols="5">
        <div v-html="markedBody" />
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
import { createPost, getQuestionCommunityReference } from '@/plugins/firebase/firestore/community';
import Marked from 'marked';
import SanitizeHtml from 'sanitize-html';
import Firebase from 'firebase/app';
import BodyTextarea from './form/body/BodyTextarea.vue';
import HeaderTextField from './form/header/HeaderTextField.vue';

export default {
  name: 'CreateForm',

  components: {
    BodyTextarea,
    HeaderTextField,
  },

  data: () => ({
    post: {
      header: '',
      body: '',
    },
  }),

  computed: {
    markedBody() {
      return SanitizeHtml(Marked(this.post.body));
    },
  },

  methods: {
    createPost() {
      this.post.created_at = Firebase.firestore.Timestamp.now();
      createPost(getQuestionCommunityReference(), this.post)
        .then((doc) => {
          console.log(doc);
          this.$router.back();
        })
        .catch((error) => {
          this.$toasted.show(error.message, {
            type: 'error',
            icon: 'mdi-account-outline',
          });
        });
    },
  },
};
</script>
