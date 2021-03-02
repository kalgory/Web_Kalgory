<template>
  <v-card
    hover
    @click.native="$router.push(`/community/question/${post.id}`)"
  >
    <v-card-title>
      {{ post.header }}
    </v-card-title>
    <v-card-subtitle>
      {{ post.createdAt }}
    </v-card-subtitle>
    <v-card-text>
      {{ processedBody }}
    </v-card-text>
    <v-card-actions>
      <v-container class="pa-0">
        <v-row justify="end">
          <v-col cols="auto">
            <v-btn
              icon
              @click.stop="isExpand=!isExpand"
            >
              <v-icon>
                {{ expandButtonIcon }}
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-actions>
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
    processedBody() {
      let markedBody = SanitizeHTML(Marked(this.post.body));
      const codeTagStrings = markedBody.match(/(?<=<code>)(.|\n)*?(?=<\/code>)/g);
      markedBody = markedBody.replace(/<code>(.|\n)*?<\/code>/g, '<c>').replace(/<(?!\/?c).*?>/g, '');
      if (codeTagStrings !== null) {
        codeTagStrings.forEach((codeTagString) => {
          markedBody = markedBody.replace('<c>', codeTagString);
        });
      }
      if (this.isExpand === false) {
        if (this.isExpand === false && markedBody.length >= 300) {
          return `${markedBody.substr(0, 300)}...`;
        }
      }
      return markedBody;
    },
    expandButtonIcon() {
      if (this.isExpand) {
        return 'mdi-chevron-up';
      }
      return 'mdi-chevron-down';
    },
  },
};
</script>
