<template>
  <v-app-bar
    app
    clipped-left
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

    <div v-show="isAuthenticated">
      <bar-menu />
    </div>

    <div v-show="!isAuthenticated">
      <v-btn
        text
        to="/auth/signin"
      >
        Sign in
      </v-btn>
      <v-btn
        to="/auth/signup"
      >
        Sign up
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import InitialLogo from '@/assets/InitialLogo.vue';
import BarMenu from '@/components/app/bar/BarMenu.vue';

export default {
  name: 'AppBar',

  components: {
    InitialLogo,
    BarMenu,
  },

  computed: {
    isAuthenticated() {
      if (this.$store.getters.getIsAuthLoading) {
        return localStorage.getItem('isAuthenticated') === 'true';
      }
      return this.$store.getters.getIsAuthenticated;
    },
  },
};
</script>
