<template>
  <verify-card v-if="!isLoading" />
</template>

<script>
import VerifyCard from '@/components/auth/verify/VerifyCard.vue';

export default {
  name: 'AuthVerify',

  components: {
    VerifyCard,
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
      if (!value) {
        this.$router.back();
      }
    },
    isVerified(value) {
      if (value) {
        this.$toasted.global.success({ message: '인증을 마쳤습니다.' });
        this.$router.back();
      }
    },
  },

  created() {
    if (this.$store.getters.getIsAuthLoading) {
      if (localStorage.getItem('isAuthenticated') === 'false') {
        this.$router.back();
      } else {
        this.isLoading = false;
      }
    } else if (!this.isAuthenticated) {
      this.$router.back();
    } else {
      if (this.isVerified) {
        this.$router.back();
      }
      this.isLoading = false;
    }
  },
};
</script>
