<template>
  <v-app>
    <app-bar />

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
    isAuth() {
      return this.$store.getters.getIsAuth;
    },
  },

  watch: {
    isAuthLoading(value) {
      if (value) {
        this.isLoading = true;
      } else if (this.isAuth) {
        this.isLoading = false;
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

  created() {
    this.onAuthStateChanged();
  },

  methods: {
    onAuthStateChanged() {
      this.$store.commit('setIsAuthLoading', true);
      onAuthStateChanged((user) => {
        this.$store.commit('setIsAuthLoading', false);
        if (user) {
          localStorage.setItem('isAuth', 'true');
          this.$store.commit('setIsAuth', true);
          this.$store.commit('setUser', user);
        } else {
          localStorage.setItem('isAuth', 'false');
          this.$store.commit('setIsAuth', false);
          this.$store.commit('setUser', {});
        }
      });
    },
  },
};
</script>
