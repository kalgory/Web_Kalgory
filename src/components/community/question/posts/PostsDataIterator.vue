<template>
  <v-data-iterator
    :items="questionPosts"
    :search="searchPost"
    hide-default-footer
  >
    <template #header>
      <v-row justify="center">
        <v-col
          cols="8"
        >
          <v-text-field
            v-model="searchPost"
            prepend-inner-icon="mdi-table-search"
          />
        </v-col>
      </v-row>
    </template>
    <template #default="props">
      <v-row
        v-for="(post,index) in props.items"
        :key="index"
        justify="center"
      >
        <v-col
          cols="8"
        >
          <v-card>
            <v-card-title class="font-weight-bold">
              {{ post.header }}
            </v-card-title>
            <v-card-text
              class="font-weight-bold"
              v-text="bodyLength(post.body,post.onPanel)"
            />
            <v-card-actions>
              <v-row>
                <v-col offset="11">
                  <v-btn
                    icon
                    @click="cardPanelAction(index)"
                  >
                    <v-icon>{{ post.panelIcon }}</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </v-data-iterator>
</template>

<script>
import { readPosts } from '@/plugins/firebase/firestore/community';
import { getQuestionCommunityReference } from '@/plugins/firebase/firestore/community/reference';

export default {
  name: 'QuestionDataIterator',

  data: () => ({
    questionPosts: [],
    searchPost: '',
  }),

  created() {
    readPosts(getQuestionCommunityReference(), 10)
      .then((posts) => {
        this.questionPosts = posts;
      })
      .catch((error) => {
        console.error(error);
      });
  },

  methods: {
    bodyLength(body, onPanel) {
      if (body.length >= 170 && onPanel === false) {
        return `${body.substr(0, 170)}...`;
      }
      console.log(body.length);
      return body;
    },
    cardPanelAction(index) {
      this.questionPosts[index].onPanel = !this.questionPosts[index].onPanel;
      if (this.questionPosts[index].onPanel === false) this.questionPosts[index].panelIcon = 'mdi-chevron-down';
      else this.questionPosts[index].panelIcon = 'mdi-chevron-up';
    },
  },
};
</script>

<style scoped>

</style>
