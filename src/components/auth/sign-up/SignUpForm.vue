<template>
  <v-form
    class="mx-12"
  >
    <v-text-field
      type="text"
      label="Username"
      prepend-inner-icon="mdi-account-outline"
      placeholder="Type your username"
      v-model="username"
    />
    <v-text-field
      type="email"
      label="Email"
      prepend-inner-icon="mdi-account-outline"
      placeholder="Type your email"
      v-model="email"
    />
    <v-text-field
      type="password"
      label="Password"
      prepend-inner-icon="mdi-lock-outline"
      placeholder="Type your password"
      v-model="password"
    >
    </v-text-field>
    <v-text-field
      type="password"
      label="Password Confirm"
      prepend-inner-icon="mdi-lock-outline"
      placeholder="Type your password"
      v-model="confirmPassword"
    >
    </v-text-field>
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
import Firebase from 'firebase/app'

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
      const email = this.email
      const password = this.password
      Firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          console.log('Sign in success')
          console.log(user)
          this.$router.go(-1)
        })
        .catch((error) => {
          console.error(error)
        })
    },
  },
}
</script>

<style scoped>

</style>