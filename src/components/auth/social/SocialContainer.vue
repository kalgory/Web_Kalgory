<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="4">
        <v-btn
          block
          @click="signInWithGoogle"
        >
          Google
        </v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn
          block
          @click="signInWithFaceBook"
        >
          Facebook
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { signInWithGoogle, signInWithFaceBook } from '@/plugins/firebase/auth';

export default {
  name: 'SocialContainer',

  methods: {
    signInWithGoogle() {
      signInWithGoogle()
        .then(() => {
          this.$router.back();
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
        });
    },
    signInWithFaceBook() {
      signInWithFaceBook();
    },
  },
};
</script>

<style scoped>

</style>
