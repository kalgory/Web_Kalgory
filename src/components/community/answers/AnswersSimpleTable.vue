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
            <read-card :answer="answer" />
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-simple-table>
</template>

<script>
import ReadCard from '@/components/community/answer/read/ReadCard.vue';
import { readPosts } from '@/plugins/firebase/firestore/community';

export default {
  name: 'AnswersSimpleTable',

  components: {
    ReadCard,
  },

  props: {
    reference: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    answers: [],
  }),

  created() {
    readPosts(this.reference)
      .then((querySnapshot) => {
        querySnapshot.forEach((snapshot) => {
          this.answers.push({
            id: snapshot.id,
            body: snapshot.data().body,
            createdAt: snapshot.data().created_at,
          });
        });
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
