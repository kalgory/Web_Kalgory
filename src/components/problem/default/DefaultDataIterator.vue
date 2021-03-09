<template>
  <v-data-iterator
    :items="problems"
    hide-default-footer
  >
    <template #default="{ items }">
      <v-container>
        <v-row>
          <v-col
            v-for="problem in items"
            :key="problem.id"
            cols="6"
          >
            <default-card :problem="problem" />
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-data-iterator>
</template>

<script>
import DefaultCard from '@/components/problem/default/DefaultCard.vue';
import { readProblems } from '@/plugins/firebase/firestore/problem';

export default {
  name: 'DefaultDataIterator',

  components: {
    DefaultCard,
  },

  data: () => ({
    problems: [],
  }),

  created() {
    this.readPosts();
  },

  methods: {
    readPosts() {
      readProblems()
        .then((querySnapshot) => {
          querySnapshot.forEach((queryDocumentSnapshot) => {
            this.problems.push({
              id: queryDocumentSnapshot.id,
              body: queryDocumentSnapshot.data().body,
              header: queryDocumentSnapshot.data().header,
              difficulty: queryDocumentSnapshot.data().difficulty,
              userDocumentReference: queryDocumentSnapshot.data().user,
              wrong_user_count: queryDocumentSnapshot.data().wrong_user_count,
              right_user_count: queryDocumentSnapshot.data().right_user_count,
              vote_down_user_count: queryDocumentSnapshot.data().vote_down_user_count,
              vote_up_user_count: queryDocumentSnapshot.data().vote_up_user_count,
            });
          });
        })
        .catch((error) => {
          this.$toasted.global.error({ message: error.message });
        });
    },
  },
};
</script>
