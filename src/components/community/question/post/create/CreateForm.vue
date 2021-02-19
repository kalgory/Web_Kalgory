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
    isBodySelection: false,
    isHeaderValid: false,
    isBodyValid: false,
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
      console.log(value);
      const bodySelectionStart = this.$refs.bodyTextarea.$refs.textarea.$el.querySelector('textarea').selectionStart;
      const bodySelectionEnd = this.$refs.bodyTextarea.$refs.textarea.$el.querySelector('textarea').selectionEnd;
      if (bodySelectionStart !== bodySelectionEnd) this.isBodySelection = true;
      if (value === 'bold') {
        if (this.isBodySelection) {
          this.post.body = `${this.post.body.slice(0, bodySelectionStart)}**${this.post.body.slice(bodySelectionStart, bodySelectionEnd)}**${this.post.body.slice(bodySelectionEnd)}`;
        } else {
          this.post.body = `${this.post.body.slice(0, bodySelectionStart)}**Bold Text**${this.post.body.slice(bodySelectionStart)}`;
        }
      }
      if (value === 'italic') {
        if (this.isBodySelection) {
          this.post.body = `${this.post.body.slice(0, bodySelectionStart)}*${this.post.body.slice(bodySelectionStart, bodySelectionEnd)}*${this.post.body.slice(bodySelectionEnd)}`;
        } else {
          this.post.body = `${this.post.body.slice(0, bodySelectionStart)}*Italic Text*${this.post.body.slice(bodySelectionStart)}`;
        }
      }
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
    processBodyTextareaErrorMessage() {
      let markedBody = SanitizeHTML(Marked(this.post.body));
      const codeTagCount = markedBody.match(/(?<=<code>)(.|\n)*?(?=<\/code>)/g);
      if (codeTagCount === null) return;
      markedBody = markedBody.replace(/<code>(.|\n)*?<\/code>|\n/g, '').replace(/<(?!\/?c).*?>/g, '');
      if (codeTagCount.length > 0 && markedBody.length === 0) {
        this.bodyErrorMessage = 'Please add some context to explain the code sections (or check that you have not incorrectly formatted all of your question as code).';
      } else if (codeTagCount.length * 4 > markedBody.length) {
        this.bodyErrorMessage = 'It looks like your post is mostly code; please add some more details.';
      } else {
        console.log(codeTagCount, markedBody);
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
