<template>
  <auth-card
    v-if="!isLoading"
    auth-type="sign in"
  />
</template>

<script>
import AuthCard from '@/components/auth/AuthCard.vue';

export default {
  name: 'SignIn',

  components: {
    AuthCard,
  },

  data: () => ({
    isLoading: true,
  }),

  created() {
    if (this.$store.getters.getIsAuthLoading) {
      if (localStorage.getItem('isAuth') === 'true') {
        this.$router.back();
      } else {
        this.isLoading = false;
      }
    } else if (this.$store.getters.getIsAuth) {
      this.$router.back();
    } else {
      this.isLoading = false;
    }
  },
};
</script>
