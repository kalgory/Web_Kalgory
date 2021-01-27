<template>
  <v-form
    class="mx-12"
  >
    <v-text-field
      v-model="username"
      type="text"
      label="Username"
      prepend-inner-icon="mdi-account-outline"
      placeholder="Type your username"
    />
    <v-text-field
      v-model="email"
      type="email"
      label="Email"
      prepend-inner-icon="mdi-account-outline"
      placeholder="Type your email"
    />
    <v-text-field
      v-model="password"
      type="password"
      label="Password"
      prepend-inner-icon="mdi-lock-outline"
      placeholder="Type your password"
    />
    <v-text-field
      v-model="confirmPassword"
      type="password"
      label="Password Confirm"
      prepend-inner-icon="mdi-lock-outline"
      placeholder="Type your password"
    />
    <v-btn
      block
      class="my-3"
      color="primary"
      @click="signUp"
    >
      Sign Up
    </v-btn>
  </v-form>
</template>

<script>
import { createUserWithEmailAndPassword } from '@/plugins/firebase/auth'

export default {
  name: 'SignUpForm',
  
  data: () => ({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  }),
  
  methods: {
    signUp () {
      this.$store.commit('setIsLoading', true)
      createUserWithEmailAndPassword(this.email, this.password)
        // eslint-disable-next-line no-unused-vars
        .then(() => {
          this.$router.back()
          this.$store.commit('setIsLoading', false)
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          this.$store.commit('setIsLoading', false)
        })
    },
  },
}
</script>