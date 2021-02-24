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

  props: {
    isPreviousRouteExist: {
      type: Boolean,
      required: true,
    },
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
        this.routerBack();
      }
    },
    isVerified(value) {
      if (value) {
        this.$toasted.global.success({ message: '인증을 마쳤습니다.' });
        this.routerBack();
      }
    },
  },

  created() {
    if (this.$store.getters.getIsAuthLoading) {
      this.routerBack();
    } else if (!this.isAuthenticated) {
      this.routerBack();
    } else if (this.isVerified) {
      this.routerBack();
    } else {
      this.isLoading = false;
    }
  },

  methods: {
    routerBack() {
      if (this.isPreviousRouteExist) {
        this.$router.back();
      } else {
        this.$router.push('/');
      }
    },
  },
};
</script>
