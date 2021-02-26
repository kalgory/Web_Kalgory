<template>
  <v-card elevation="0">
    <v-card-text v-html="markedBody" />
    <v-card-text>{{ answer.created_at }}</v-card-text>
  </v-card>
</template>

<script>
import Marked from 'marked';
import SanitizeHTML from 'sanitize-html';

export default {
  name: 'DataCard.vue',

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
