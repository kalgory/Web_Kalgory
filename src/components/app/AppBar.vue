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

    <bar-user
      v-if="isAvatarShow"
    />

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
import BarUser from '@/components/app/bar/BarUser.vue';

export default {
  name: 'AppBar',

  components: {
    InitialLogo,
    BarUser,
  },

  computed: {
    isAvatarShow() {
      if (this.$store.getters.getIsAuthLoading) {
        return localStorage.getItem('isAuthenticated') === 'true';
      }
      return this.$store.getters.getIsAuthenticated;
    },
    isAuthShow() {
      if (this.$store.getters.getIsAuthLoading) {
        return localStorage.getItem('isAuthenticated') === 'false';
      }
      return !this.$store.getters.getIsAuthenticated;
    },
  },
};
</script>
