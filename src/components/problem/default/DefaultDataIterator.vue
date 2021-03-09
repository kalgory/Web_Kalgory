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
            <v-card>
              <v-card-title>
                {{ problem.name }}
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-data-iterator>
</template>

<script>
import { readProblems } from '@/plugins/firebase/firestore/problem';

export default {
  name: 'DefaultDataIterator',

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
            this.problems.push({
              id: snapshot.id,
              body: snapshot.data().body,
              header: snapshot.data().header,
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
