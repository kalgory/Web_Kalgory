<template>
  <auth-card auth-type="sign up" />
</template>

<script>
import AuthCard from '@/components/auth/AuthCard.vue';

export default {
  name: 'SignUp',

  components: {
    AuthCard,
  },
};
</script>
