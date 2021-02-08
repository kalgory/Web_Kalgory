<template>
  <v-card>
    <v-card-title class="font-weight-bold">
      {{ post.header }}
    </v-card-title>
    <v-card-subtitle>
      {{ post.createdAt }}
    </v-card-subtitle>
    <v-card-text
      class="font-weight-bold"
      v-html="getProcessedBody()"
    />
    <v-card-actions>
      <v-row>
        <v-col offset="11">
          <v-btn
            icon
            @click="isExpand=!isExpand"
          >
            <v-icon v-if="isExpand">
              mdi-chevron-up
            </v-icon>
            <v-icon v-if="!isExpand">
              mdi-chevron-down
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import Marked from 'marked';
import SanitizeHtml from 'sanitize-html';

export default {
  name: 'DataCard',

  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    isExpand: false,
  }),

  methods: {
    getProcessedBody() {
      let markedHtml = SanitizeHtml(Marked(this.post.body));
      const codeTagString = markedHtml.match(/<code>(.|\n)*?<\/code>/g);
      markedHtml = markedHtml.replace(/<code>(.|\n)*?<\/code>/g, '<>').replace(/(<([^>]+)>)|\n/g, '');
      for (let i = 0; codeTagString !== null && i < codeTagString.length; i += 1) {
        codeTagString[i] = codeTagString[i].replace(/<code>|<\/code>|\n/g, '');
        markedHtml = markedHtml.replace('<>', codeTagString[i]);
      }
      console.log(markedHtml);
      if (this.isExpand === false) {
        if (markedHtml.length >= 300) {
          return `${markedHtml.substr(0, 300)}...`;
        }
      }
      return markedHtml;
    },
  },
};
</script>
