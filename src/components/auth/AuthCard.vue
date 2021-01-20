<template>
  <v-card
    width="400"
    class="mx-auto"
  >
    <auth-card-title/>
    
    <auth-social-container/>
    
    <v-divider class="ma-8"/>
    
    <sign-in-form v-if="authType==='sign in'"/>
    <sign-up-form v-if="authType==='sign up'"/>
    
    <auth-card-actions :auth-type="authType"/>
  </v-card>
</template>

<script>
import AuthSocialContainer from '@/components/auth/AuthSocialContainer'
import SignInForm from '@/components/auth/sign-in/SignInForm'
import SignUpForm from '@/components/auth/sign-up/SignUpForm'
import AuthCardTitle from '@/components/auth/AuthCardTitle'
import AuthCardActions from '@/components/auth/AuthCardActions'

export default {
  name: 'AuthCard',
  
  components: {
    AuthCardTitle,
    AuthSocialContainer,
    SignInForm,
    SignUpForm,
    AuthCardActions,
  },
  
  props: {
    authType: {
      type: String,
      required: true,
      validator: function (value) {
        return value === 'sign in' || value === 'sign up'
      },
    },
  },
}
</script>

<style scoped>

</style>