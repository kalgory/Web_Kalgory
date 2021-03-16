<template>
  <v-card
    height="200"
    @click="pushProblemSolve"
  >
    <v-container>
      <v-row>
        <v-col cols="auto">
          {{ problem.header }}
        </v-col>
        <v-spacer />
        <v-col cols="auto">
          {{ user.name }}
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-divider />
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="auto">
          참여자수
        </v-col>
        <v-col cols="auto">
          {{ problem.wrong_user_count + problem.right_user_count }}
        </v-col>
        <v-spacer />
        <v-col cols="auto">
          <v-rating
            length="5"
            :value="3"
            readonly
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="auto">
          정답자수
        </v-col>
        <v-col cols="auto">
          {{ problem.right_user_count }}
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { readUserByReference } from '@/plugins/firebase/firestore/user';

export default {
  name: 'DefaultCard',

  props: {
    problem: {
      type: Object,
      required: true,
      default: () => ({
        submitted_user_count: 0,
        wrong_count: 0,
      }),
    },
  },

  data: () => ({
    user: {},
  }),

  created() {
    this.readUser();
  },

  methods: {
    readUser() {
      readUserByReference(this.problem.userDocumentReference)
        .then((documentSnapshot) => {
          this.user = documentSnapshot.data();
        })
        .catch((error) => {
          this.$toasted.global.error({ message: error.message });
        });
    },
    pushProblemSolve() {
      this.$router.push(`/problem/${this.problem.id}`);
    },
  },
};
</script>
