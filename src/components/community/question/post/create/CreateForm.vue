<template>
  <v-form
    ref="form"
    @submit.prevent="submit"
  >
    <v-row>
      <v-col
        cols="6"
        offset="1"
      >
        <header-text-field
          v-model="post.header"
          :tab-index="1"
          :is-focus="isHeaderTextFieldFocus"
          :is-validate-on-blur="isHeaderTextFieldValidateOnBlur"
          @input="isHeaderTextFieldValidateOnBlur=true"
          @blur="isHeaderTextFieldFocus=false"
          @focus="isHeaderTextFieldFocus=true"
          @error="onHeaderTextFieldError"
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
        <body-toolbar @click="onBodyToolbarButtonClick" />
        <body-textarea
          ref="bodyTextarea"
          v-model="post.body"
          :error-message="bodyErrorMessage"
          :tab-index="2"
          :rows="10"
          :is-focus="isBodyTextareaFocus"
          :is-validate-on-blur="isBodyTextareaValidateOnBlur"
          @input="isBodyTextareaValidateOnBlur=true"
          @blur="onBodyTextareaBlur"
          @focus="onBodyTextareaFocus"
          @error="onBodyTextareaError"
        />
      </v-col>
      <v-col cols="5">
        <div v-html="markedBody" />
      </v-col>
    </v-row>
    <v-row>
      <v-col offset="9">
        <v-btn
          tabindex="3"
          type="submit"
        >
          Post Create
        </v-btn>
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
import BodyToolbar from './form/body/BodyToolbar.vue';
import HeaderTextField from './form/header/HeaderTextField.vue';

export default {
  name: 'CreateForm',

  components: {
    BodyTextarea,
    BodyToolbar,
    HeaderTextField,
  },

  data: () => ({
    post: {
      header: '',
      body: '',
    },
    hyperlinkCount: 0,
    isHeaderValid: false,
    isBodyValid: false,
    isBodySelection: false,
    isHeaderTextFieldFocus: false,
    isBodyTextareaFocus: false,
    isHeaderTextFieldValidateOnBlur: true,
    isBodyTextareaValidateOnBlur: true,
    bodyErrorMessage: '',
  }),

  computed: {
    markedBody() {
      return SanitizeHTML(Marked(this.post.body));
    },
    isValid() {
      return this.$refs.form.validate();
    },
  },

  mounted() {
    this.isHeaderTextFieldFocus = true;
  },

  methods: {
    onBodyToolbarButtonClick(value) {
      if (value === 'bold') {
        this.processWrapBodyText('**', '**', 'Bold Text');
      }
      if (value === 'italic') {
        this.processWrapBodyText('*', '*', 'Italic Text');
      }
      if (value === 'link') {
        this.processWrapBodyText('[', `][${this.hyperlinkCount}]\n\n [${this.hyperlinkCount}]: https://linkHere\n`, 'link description here');
      }
      if (value === 'quote') {
        this.processWrapBodyText('\n> ', '\n', 'Blockquote');
      }
      if (value === 'code') {
        this.processWrapBodyText('`', '`', 'Add Code Here');
      }
      if (value === 'numberedList') {
        this.processWrapBodyText('\n 1. ', '\n', 'List Item');
      }
      if (value === 'bulletedList') {
        this.processWrapBodyText('\n - ', '\n', 'ListItem');
      }
      if (value === 'horizontal') {
        this.processWrapBodyText('\n------------\n', '\n', '');
      }
      this.isBodyTextareaFocus = true;
    },
    onHeaderTextFieldError(value) {
      this.isHeaderValid = !value;
    },
    onBodyTextareaError(value) {
      this.isBodyValid = !value;
    },
    onBodyTextareaBlur() {
      this.processBodyTextareaErrorMessage();
      this.isBodyTextareaFocus = false;
    },
    onBodyTextareaFocus() {
      this.bodyErrorMessage = '';
      this.isBodyTextareaFocus = true;
    },
    processWrapBodyText(addMarkdownFrontString, addMarkdownEndString, addNotSelectionMessage) {
      const bodySelectionStart = this.$refs.bodyTextarea.$refs.textarea.$el.querySelector('textarea').selectionStart;
      const bodySelectionEnd = this.$refs.bodyTextarea.$refs.textarea.$el.querySelector('textarea').selectionEnd;
      if (bodySelectionStart !== bodySelectionEnd) {
        this.post.body = this.post.body.slice(0, bodySelectionStart)
            + addMarkdownFrontString + this.post.body.slice(bodySelectionStart, bodySelectionEnd)
            + addMarkdownEndString + this.post.body.slice(bodySelectionEnd);
        setTimeout(() => this.$refs.bodyTextarea.$refs.textarea.$el.querySelector('textarea')
          .setSelectionRange(bodySelectionStart + addMarkdownFrontString.length,
            bodySelectionEnd + addMarkdownFrontString.length));
      } else {
        this.post.body = this.post.body.slice(0, bodySelectionStart)
            + addMarkdownFrontString + addNotSelectionMessage + addMarkdownEndString
            + this.post.body.slice(bodySelectionStart);
        setTimeout(() => this.$refs.bodyTextarea.$refs.textarea.$el.querySelector('textarea')
          .setSelectionRange(bodySelectionStart + addMarkdownFrontString.length,
            bodySelectionEnd + addMarkdownFrontString.length + addNotSelectionMessage.length));
      }
    },
    processBodyTextareaErrorMessage() {
      let markedBody = SanitizeHTML(Marked(this.post.body));
      const codeTagCount = markedBody.match(/(?<=<code>)(.|\n)*?(?=<\/code>)/g);
      if (codeTagCount === null) return;
      markedBody = markedBody.replace(/<code>(.|\n)*?<\/code>|\n/g, '').replace(/<(?!\/?c).*?>/g, '');
      if (codeTagCount.length > 0 && markedBody.length === 0) {
        this.bodyErrorMessage = 'Please add some context to explain the code sections (or check that you have not incorrectly formatted all of your question as code).';
      } else if (codeTagCount.length * 4 > markedBody.length) {
        this.bodyErrorMessage = 'It looks like your post is mostly code; please add some more details.';
      }
    },
    submit() {
      this.isHeaderTextFieldValidateOnBlur = false;
      this.isBodyTextareaValidateOnBlur = false;
      if (this.isValid) {
        this.post.created_at = Firebase.firestore.Timestamp.now();
        createPost(getQuestionCommunityReference(), this.post)
        // eslint-disable-next-line no-unused-vars
          .then((documentReference) => {
            this.$router.back();
          })
          .catch((error) => {
            this.$toasted.global.error({ message: error.message });
          });
      } else if (!this.isHeaderValid) {
        this.isHeaderTextFieldFocus = true;
        this.$toasted.global.error({ message: 'Header가 유효하지 않습니다.' });
      } else if (!this.isBodyValid) {
        this.isBodyTextareaFocus = true;
        this.$toasted.global.error({ message: 'Body가 유효하지 않습니다.' });
      } else {
        // TODO 서버에 log 남기기
        this.$toasted.global.error();
      }
    },
  },
};
</script>
