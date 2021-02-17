<template>
  <v-card
    :loading="isLoading"
    width="400"
  >
    <auth-card-title>
      인증을 하면 계속 사용가능합니다
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
