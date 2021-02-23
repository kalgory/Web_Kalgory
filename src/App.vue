<template>
  <v-app>
    <app-bar v-if="$route.meta.isAppBarShow" />

    <v-main>
      <v-progress-linear
        v-if="isLoading"
        indeterminate
      />
      <router-view v-else />
    </v-main>

    <app-footer />
  </v-app>
</template>

<script>
import AppBar from '@/components/app/AppBar.vue';
import AppFooter from '@/components/app/AppFooter.vue';
import { onAuthStateChanged } from '@/plugins/firebase/auth';

export default {
  name: 'App',

  components: {
    AppBar,
    AppFooter,
  },

  data: () => ({
    isLoading: true,
  }),

  computed: {
    isAuthLoading() {
      return this.$store.getters.getIsAuthLoading;
    },
    isRequireAuth() {
      return this.$route.meta.isRequireAuth;
    },
    isAuthenticated() {
      return this.$store.getters.getIsAuthenticated;
    },
    isVerified() {
      return this.$store.getters.getIsVerified;
    },
  },

  watch: {
    isAuthLoading(value) {
      if (value) {
        this.isLoading = true;
      } else if (this.isAuthenticated) {
        this.isLoading = false;
        if (!this.isVerified) {
          this.pushAuthVerifyRoute();
        }
      } else if (this.isRequireAuth) {
        this.$router.push('/');
      } else {
        this.isLoading = false;
      }
    },
    isRequireAuth(value) {
      this.isLoading = value && this.isAuthLoading;
    },
  },

  beforeUpdate() {
    if (!this.isAuthLoading && this.isAuthenticated && !this.isVerified) {
      this.pushAuthVerifyRoute();
    }
  },

  created() {
    this.onAuthStateChanged();
  },

  methods: {
    pushAuthVerifyRoute() {
      if (this.$route.path !== '/auth/verify') {
        this.$router.push('/auth/verify');
      }
    },
    onAuthStateChanged() {
      this.$store.commit('setIsAuthLoading', true);
      onAuthStateChanged((user) => {
        this.$store.commit('setIsAuthLoading', false);
        if (user) {
          localStorage.setItem('isAuthenticated', 'true');
          this.$store.commit('setIsAuthenticated', true);
          this.$store.commit('setIsVerified', user.emailVerified);
          this.$store.commit('setUser', user);
        } else {
          localStorage.setItem('isAuthenticated', 'false');
          this.$store.commit('setIsAuthenticated', false);
          this.$store.commit('setIsVerified', false);
          this.$store.commit('setUser', {});
        }
      });
    },
  },
};
</script>
