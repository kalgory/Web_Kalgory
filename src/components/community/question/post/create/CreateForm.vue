<template>
  <v-form>
    <v-row>
      <v-col
        cols="6"
        offset="1"
      >
        <header-text-field
          v-model="post.header"
          :tab-index="1"
          :is-focus="isHeaderTextFieldFocus"
          @blur="isHeaderTextFieldFocus=false"
          @focus="isHeaderTextFieldFocus=true"
        />
      </v-col>
      <v-col
        cols="2"
        offset="2"
      >
        <v-text-field
          label="username"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        cols="6"
        offset="1"
      >
        <body-textarea
          v-model="post.body"
          :error-message="bodyErrorMessage"
          :tab-index="2"
          :rows="10"
          :is-focus="isBodyTextareaFocus"
          @blur="onBodyTextareaBlur"
          @focus="onBodyTextareaFocus"
        />
      </v-col>
      <v-col cols="5">
        <div v-html="markedBody" />
      </v-col>
    </v-row>
    <v-row>
      <v-col offset="10">
        <v-btn
          tabindex="3"
          @click="createPost"
        />
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { createPost, getQuestionCommunityReference } from '@/plugins/firebase/firestore/community';
import Marked from 'marked';
import SanitizeHTML from 'sanitize-html';
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
    isValid: false,
    isHeaderTextFieldFocus: false,
    isBodyTextareaFocus: false,
    bodyErrorMessage: '',
  }),

  computed: {
    markedBody() {
      return SanitizeHTML(Marked(this.post.body));
    },
  },

  mounted() {
    this.isHeaderTextFieldFocus = true;
  },

  methods: {
    onBodyTextareaBlur() {
      this.processBodyTextareaErrorMessage();
      this.isBodyTextareaFocus = false;
    },
    onBodyTextareaFocus() {
      this.bodyErrorMessage = '';
      this.isBodyTextareaFocus = true;
    },
    processBodyTextareaErrorMessage() {
      let markedBody = SanitizeHTML(Marked(this.post.body));
      const codeTagCount = markedBody.match(/(?<=<code>)(.|\n)*?(?=<\/code>)/g);
      markedBody = markedBody.replace(/<code>(.|\n)*?<\/code>|\n/g, '').replace(/<(?!\/?c).*?>/g, '');
      if (codeTagCount !== null && codeTagCount.length > 0 && markedBody.length === 0) {
        this.bodyErrorMessage = 'Please add some context to explain the code sections (or check that you have not incorrectly formatted all of your question as code).';
      } else if (codeTagCount * 4 > markedBody.length) {
        this.bodyErrorMessage = 'It looks like your post is mostly code; please add some more details.';
      }
    },
    createPost() {
      if (this.isValid) {
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
      }
    },
  },
};
</script>
