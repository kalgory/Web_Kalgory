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
          querySnapshot.forEach((snapshot) => {
            console.log(snapshot.data().user);
            this.problems.push({
              id: snapshot.id,
              body: snapshot.data().body,
              header: snapshot.data().header,
              userDocumentReference: snapshot.data().user,
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
