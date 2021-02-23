<template>
  <v-card
    :loading="isLoading"
    width="400"
  >
    <auth-card-title :is-button-disabled="true">
      계속 하려면 이메일을 인증해주세요.
    </auth-card-title>
    test
  </v-card>
</template>

<script>
import AuthCardTitle from '@/components/auth/AuthCardTitle.vue';

export default {
  name: 'VerifyCard',

  components: {
    AuthCardTitle,
  },

  data: () => ({
    isLoading: false,
  }),
};
</script>
