<template>
  <v-card>
    <v-card-title
      @click="$router.push({path:`/community/question/${post.id}`})"
    >
      <a class="blue--text">{{ post.header }}</a>
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
import SanitizeHTML from 'sanitize-html';

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
};
</script>
