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

  props: {
    previousRouteName: {
      type: String,
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
      if (value) {
        if (this.isVerified) {
          this.routerBack();
        } else {
          this.$router.push('/auth/verify');
        }
      }
    },
  },

  created() {
    if (this.$store.getters.getIsAuthLoading) {
      if (localStorage.getItem('isAuthenticated') === 'true') {
        this.routerBack();
      } else {
        this.isLoading = false;
      }
    } else if (this.isAuthenticated) {
      this.routerBack();
    } else {
      this.isLoading = false;
    }
  },

  methods: {
    routerBack() {
      if (this.previousRouteName) {
        this.$router.back();
      } else {
        this.$router.push('/');
      }
    },
  },
};
</script>
