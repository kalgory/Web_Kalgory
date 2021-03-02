<template>
  <v-card flat>
    <v-card-subtitle>{{ post.createdAt }}</v-card-subtitle>
    <v-card-text v-html="markedBody" />
  </v-card>
</template>

<script>
import SanitizeHTML from 'sanitize-html';
import Marked from 'marked';

export default {
  name: 'IteratorCard',

  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  computed: {
    markedBody() {
      return SanitizeHTML(Marked(this.post.body));
    },
  },
};
</script>
