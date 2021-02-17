<template>
  <sign-in-card v-if="!isLoading" />
</template>

<script>
import SignInCard from '@/components/auth/sign-in/SignInCard.vue';

export default {
  name: 'AuthSignIn',

  components: {
    SignInCard,
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
