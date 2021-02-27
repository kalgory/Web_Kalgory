<template>
  <v-card :elevation="0">
    <v-card-subtitle>{{ answer.createdAt }}</v-card-subtitle>
    <v-card-text v-html="markedBody" />
  </v-card>
</template>

<script>
import SanitizeHTML from 'sanitize-html';
import Marked from 'marked';

export default {
  name: 'ReadCard',

  props: {
    answer: {
      type: Object,
      required: true,
    },
  },

  computed: {
    markedBody() {
      return SanitizeHTML(Marked(this.answer.body));
    },
  },
};
</script>
