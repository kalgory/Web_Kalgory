<template>
  <div>
    <div class="text-center pt-10">
      <v-btn to="/">
        Home
      </v-btn>
    </div>
    
    <div
      v-once
      class="text-center font-weight-black py-6 pt-2"
    >
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthCardTitle',
  
  props: {
    authType: {
      type: String,
      required: true,
      validator: function (value) {
        return value === 'sign in' || value === 'sign up'
      },
    },
  },
  
  data: () => ({
    title: '',
    signInTitle: 'Sign in to kalgory',
    signUpTitle: 'Sign Up to kalgory',
  }),
  
  created () {
    if (this.authType === 'sign in') {
      this.title = this.signInTitle
    } else if (this.authType === 'sign up') {
      this.title = this.signUpTitle
    }
  },
}
</script>

<style scoped>

</style>