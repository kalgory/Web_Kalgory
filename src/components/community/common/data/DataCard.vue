<template>
  <v-card :elevation="elevation">
    <v-card-title
      @click="$router.push({path:`/community/question/${data.id}`})"
    >
      <a class="blue--text">{{ data.header }}</a>
    </v-card-title>
    <v-card-subtitle>{{ data.createdAt }}</v-card-subtitle>
    <v-card-text v-html="getDataBody" />
    <v-card-actions v-if="!isBodyRenderingHtml">
      <v-row>
        <v-col align="end">
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
import SanitizeHTML from 'sanitize-html';

export default {
  name: 'DataCard',

  props: {
    data: {
      type: Object,
      required: true,
    },
    elevation: {
      type: Number,
      required: false,
      default: 0,
    },
    isBodyRenderingHtml: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data: () => ({
    isExpand: false,
  }),

  computed: {
    markedBody() {
      return SanitizeHTML(Marked(this.data.body));
    },
    getDataBody() {
      if (this.isBodyRenderingHtml) {
        return this.data.body;
      }
      return this.getProcessedBody;
    },
    getProcessedBody() {
      let markedBody = SanitizeHTML(Marked(this.data.body));
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
  },
};
</script>
