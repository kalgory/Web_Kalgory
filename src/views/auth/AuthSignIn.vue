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

  computed: {
    isAuthenticated() {
      return this.$store.getters.getIsAuthenticated;
    },
    isVerified() {
      return this.$store.getters.getIsVerified;
    },
  },

  watch: {
    isAuthenticated(value) {
      if (value) {
        if (this.isVerified) {
          this.$router.back();
        } else {
          this.$router.push('/auth/verify');
        }
      }
    },
  },

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
