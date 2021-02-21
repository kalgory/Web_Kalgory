<template>
  <sign-up-card v-if="!isLoading" />
</template>

<script>
import SignUpCard from '@/components/auth/sign-up/SignUpCard.vue';

export default {
  name: 'AuthSignUp',

  components: {
    SignUpCard,
  },

  data: () => ({
    isLoading: true,
  }),

  created() {
    if (this.$store.getters.getIsAuthLoading) {
      if (localStorage.getItem('isAuthenticated') === 'true') {
        this.$router.back();
      } else {
        this.isLoading = false;
      }
    } else if (this.$store.getters.getIsAuthenticated) {
      this.$router.back();
    } else {
      this.isLoading = false;
    }
  },
};
</script>
