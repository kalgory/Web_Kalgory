<template>
  <v-data-iterator
    :items="problems"
    :loading="isLoading"
    :items-per-page="problemsPerPage"
    :page="page"
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
    <template #loading>
      <v-container>
        <v-row>
          <v-col
            v-for="index in problemsPerPage"
            :key="index"
            cols="6"
          >
            <v-card>
              <v-skeleton-loader
                type="text"
                height="200"
                class="pa-12"
              />
              <v-divider />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </template>
    <template #footer>
      <v-container>
        <v-row justify="center">
          <v-col>
            <v-pagination
              v-model="page"
              :length="problemsCount / problemsPerPage + 1"
            />
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
    problemsPerPage: 16,
    isLoading: true,
    page: 1,
  }),

  computed: {
    problemsCount() {
      return this.problems.length;
    },
  },

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
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>
