<template>
  <v-app-bar
    v-if="isAppBarShow"
    app
  >
    <initial-logo />
    <v-btn
      text
      to="/problem"
    >
      problem
    </v-btn>
    <v-btn
      text
      to="/concept"
    >
      concept
    </v-btn>
    <v-btn
      text
      to="/community"
    >
      community
    </v-btn>
    <v-spacer />

    <v-avatar
      color="primary"
    >
      JHM
    </v-avatar>

    <v-btn
      v-if="isSignOutShow"
      @click="signOut"
    >
      sign out
    </v-btn>

    <v-btn
      v-if="isAuthShow"
      text
      to="/auth/signin"
    >
      Sign in
    </v-btn>
    <v-btn
      v-if="isAuthShow"
      to="/auth/signup"
    >
      Sign up
    </v-btn>
  </v-app-bar>
</template>

<script>
import InitialLogo from '@/assets/InitialLogo.vue';
import { signOut } from '@/plugins/firebase/auth';

export default {
  name: 'AppBar',

  components: {
    InitialLogo,
  },

  computed: {
    isAppBarShow() {
      switch (this.$route.name) {
        case 'sign in':
          return false;
        case 'sign up':
          return false;
        default:
          return true;
      }
    },
    isSignOutShow() {
      if (this.$store.getters.getIsLoading) {
        return localStorage.getItem('isAuth') === 'true';
      }
      return this.$store.getters.getIsAuth;
    },
    isAuthShow() {
      if (this.$store.getters.getIsLoading) {
        return localStorage.getItem('isAuth') === 'false';
      }
      return !this.$store.getters.getIsAuth;
    },
  },

  methods: {
    signOut() {
      signOut()
        .then(() => {

        })
        .catch((error) => {
          console.warn(error);
        });
    },
  },
};
</script>
