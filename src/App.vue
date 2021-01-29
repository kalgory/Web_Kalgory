<template>
  <v-app>
    <app-bar />

    <v-main>
      <router-view />
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

  created() {
    this.$store.commit('setIsLoading', true);
    onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem('isAuth', 'true');
        this.$store.commit('setIsAuth', true);
        this.$store.commit('setUser', user);
        this.$store.commit('setIsLoading', false);
      } else {
        localStorage.setItem('isAuth', 'false');
        this.$store.commit('setIsAuth', false);
        this.$store.commit('setUser', null);
        this.$store.commit('setIsLoading', false);
      }
    });
  },
};
</script>
