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
        v-for="post in props.items"
        :key="post.body"
        justify="center"
      >
        <v-col
          cols="8"
        >
          <v-card>
            <v-card-title class="font-weight-bold">
              {{ post.header }}
            </v-card-title>
            <v-card-text>
              {{ post.body }}
            </v-card-text>
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
};
</script>

<style scoped>

</style>
