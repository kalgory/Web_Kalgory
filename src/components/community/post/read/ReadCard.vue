<template>
  <v-card
    :elevation="elevation"
    @click.native="$router.push(`/community/question/${post.id}`)"
  >
    <v-card-title>
      {{ post.header }}
    </v-card-title>
    <v-card-subtitle>{{ post.createdAt }}</v-card-subtitle>
    <v-card-text v-html="postBody" />
    <v-card-actions v-if="!isBodyRenderingHtml">
      <v-row>
        <v-col align="end">
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
    </v-card-actions>
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
    expandButtonIcon() {
      if (this.isExpand) {
        return 'mdi-chevron-up';
      }
      return 'mdi-chevron-down';
    },
    markedBody() {
      return SanitizeHTML(Marked(this.post.body));
    },
    postBody() {
      if (this.isBodyRenderingHtml) {
        return this.post.body;
      }
      return this.processedBody;
    },
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
  },

  methods: {
    test2() {
      console.log(this.$router);
    },
  },
};
</script>
