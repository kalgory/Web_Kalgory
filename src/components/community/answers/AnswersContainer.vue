<template>
  <v-container>
    <v-row
      v-for="(answer,index) in answers"
      :key="index"
    >
      <v-col>
        <iterator-card :post="answer" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import IteratorCard from '@/components/community/answers/iterator/IteratorCard.vue';
import { readPosts } from '@/plugins/firebase/firestore/community';

export default {
  name: 'AnswersContainer',

  components: {
    IteratorCard,
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
