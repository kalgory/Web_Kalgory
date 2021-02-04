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
    this.$store.commit('setIsAuthLoading', true);
    onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem('isAuth', 'true');
        localStorage.setItem('user', JSON.stringify(user));
        this.$store.commit('setIsAuth', true);
        this.$store.commit('setUser', user);
      } else {
        localStorage.setItem('isAuth', 'false');
        localStorage.setItem('user', JSON.stringify({}));
        this.$store.commit('setIsAuth', false);
        this.$store.commit('setUser', {});
      }
      this.$store.commit('setIsAuthLoading', false);
    });
  },
};
</script>
