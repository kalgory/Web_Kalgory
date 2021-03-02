<template>
  <v-card flat>
    <v-card-title>
      {{ post.header }}
    </v-card-title>
    <v-card-subtitle>
      {{ post.createdAt }}
    </v-card-subtitle>
    <v-card-text v-html="markedBody" />
  </v-card>
</template>

<script>
import Marked from 'marked';
import SanitizeHTML from 'sanitize-html';

export default {
  name: 'ReadCard',

  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    isExpand: false,
  }),

  computed: {
    expandButtonIcon() {
      if (this.isExpand) {
        return 'mdi-chevron-up';
      }
      return 'mdi-chevron-down';
    },
    markedBody() {
      return SanitizeHTML(Marked(this.post.body));
    },
  },
};
</script>
