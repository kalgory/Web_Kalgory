<template>
  <v-data-iterator
    :items="answers"
    :items-per-page="itemCountPerPage"
    hide-default-footer
  >
    <template #default="props">
      <v-container>
        <v-row
          v-for="(answer,index) in props.items"
          :key="index"
          justify="center"
        >
          <v-col
            cols="8"
          >
            <data-card :answer="answer" />
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-data-iterator>
</template>

<script>
import { readAnswers, getQuestionCommunityReference } from '@/plugins/firebase/firestore/community';

export default {
  name: 'AnswerDataIterator.vue',

  data: () => ({
    itemCountPerPage: 0,
    answers: [],
  }),

  created() {
    this.readAnswers();
  },

  methods: {
    readAnswers() {
      readAnswers(getQuestionCommunityReference(), this.$route.params.id)
        .then((querySnapshot) => {
          querySnapshot.forEach((snapshot) => {
            this.answers.push({
              id: snapshot.id,
              body: snapshot.data().body,
              createdAt: snapshot.data().created_at,
            });
          });
          this.itemCountPerPage = this.answers.length;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },

};
</script>
