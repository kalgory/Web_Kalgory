<template>
  <v-form
    class="mx-12"
  >
    <v-text-field
      v-model="email"
      type="email"
      label="Email"
      prepend-inner-icon="mdi-account-outline"
      placeholder="Type your email"
    />
    <v-text-field
      v-model="password"
      type="password"
      label="Password"
      prepend-inner-icon="mdi-lock-outline"
      placeholder="Type your password"
    />
    <v-btn
      block
      class="my-3"
      color="primary"
      @click="signIn"
    >
      Sign in
    </v-btn>
  </v-form>
</template>

<script>
import { signInWithEmailAndPassword } from '@/plugins/firebase/auth';

export default {
  name: 'SignInForm',

  data: () => ({
    email: '',
    password: '',
  }),

  methods: {
    signIn() {
      this.$store.commit('setIsAuthLoading', true);
      signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.back();
          this.$store.commit('setIsAuthLoading', false);
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          this.$store.commit('setIsAuthLoading', false);
        });
    },
  },
};
</script>
