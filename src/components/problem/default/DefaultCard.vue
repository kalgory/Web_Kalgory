<template>
  <v-card>
    <v-card-title>
      <v-container>
        <v-row>
          <v-col>
            {{ problem.header }}
          </v-col>
          <v-col>
            {{ user.name }}
          </v-col>
        </v-row>
      </v-container>
    </v-card-title>
  </v-card>
</template>

<script>
import { readUser } from '@/plugins/firebase/firestore/user';

export default {
  name: 'DefaultCard',

  props: {
    problem: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    user: {},
  }),

  created() {

  },

  methods: {
    readUser() {
      readUser(this.problem.userDocumentReference)
        .then((documentSnapshot) => {
          console.log(documentSnapshot);
          this.user = documentSnapshot.data();
        })
        .catch((error) => {
          this.$toasted.global.show({ message: error.message });
        });
    },
  },
};
</script>
