<template>
  <v-simple-table
    hide-default-footer
  >
    <template #default>
      <v-container>
        <v-row
          v-for="(answer,index) in answers"
          :key="index"
        >
          <v-col>
            <data-card :answer="answer" />
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-simple-table>
</template>

<script>
import { readAnswers, getQuestionCommunityReference } from '@/plugins/firebase/firestore/community';
import DataCard from './data/DataCard.vue';

export default {
  name: 'AnswerSimpleTable',

  components: {
    DataCard,
  },

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
