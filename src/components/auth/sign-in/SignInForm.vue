<template>
  <v-form
    class="mx-12"
  >
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
    <v-btn
      block
      class="my-3"
      color="primary"
      @click="signIn"
    >
      Sign in
    </v-btn>
  </v-form>
</template>

<script>
import { signInWithEmailAndPassword } from '@/firebase/auth'

export default {
  name: 'SignInForm',
  
  data: () => ({
    email: '',
    password: '',
  }),
  
  methods: {
    signIn: function () {
      signInWithEmailAndPassword(this.email, this.password)
    }
  },
}
</script>