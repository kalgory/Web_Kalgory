<template>
  <v-card
    :loading="isLoading"
    width="400"
  >
    <auth-card-title>
      Sign in to kalgory
    </auth-card-title>

    <social-container />

    <v-divider class="ma-8" />

    <sign-in-form
      @ondStartLoad="isLoading=true"
      @onEndLoad="isLoading=false"
    />

    <sign-in-card-actions />
  </v-card>
</template>

<script>
import AuthCardTitle from '@/components/auth/AuthCardTitle.vue';
import SocialContainer from '@/components/auth/social/SocialContainer.vue';
import SignInForm from '@/components/auth/sign-in/SignInForm.vue';
import SignInCardActions from '@/components/auth/sign-in/SignInCardActions.vue';

export default {
  name: 'SignInCard',

  components: {
    AuthCardTitle,
    SocialContainer,
    SignInForm,
    SignInCardActions,
  },

  data: () => ({
    isLoading: false,
  }),
};
</script>
