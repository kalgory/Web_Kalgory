<template>
  <v-card
    :loading="isLoading"
    width="400"
  >
    <auth-card-title>
      Sign up to kalgory
    </auth-card-title>

    <social-container />

    <v-divider class="ma-8" />

    <sign-up-form
      @ondStartLoad="isLoading=true"
      @onEndLoad="isLoading=false"
    />

    <sign-up-card-actions />
  </v-card>
</template>

<script>
import AuthCardTitle from '@/components/auth/AuthCardTitle.vue';
import SocialContainer from '@/components/auth/social/SocialContainer.vue';
import SignUpForm from '@/components/auth/sign-up/SignUpForm.vue';
import SignUpCardActions from '@/components/auth/sign-up/SignUpCardActions.vue';

export default {
  name: 'SignUpCard',

  components: {
    AuthCardTitle,
    SocialContainer,
    SignUpForm,
    SignUpCardActions,
  },

  data: () => ({
    isLoading: false,
  }),
};
</script>
