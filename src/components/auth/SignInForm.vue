<template>
  <v-card
    width="400"
    class="mx-auto"
  >
    <div class="text-center pt-10">
      <v-btn
        @click="$router.push({name: 'home'})"
      >
        Home
      </v-btn>
    </div>
    
    <div class="text-center font-weight-black py-6 pt-2">
      Sign in to Kalgory
    </div>
    
    <v-container>
      <v-row justify="center">
        <v-col cols="4">
          <v-btn block>
            Google
          </v-btn>
        </v-col>
        <v-col cols="4">
          <v-btn block>
            Facebook
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    
    <v-divider
      class="ma-8"
    />
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
    
    <v-container>
      <v-row class="mx-4">
        <v-col>
          <v-btn
            text
            class="caption"
          >
            Forgot password?
          </v-btn>
        </v-col>
        <v-spacer/>
        <v-col>
          <v-btn
            text
            class="caption"
            router
            @click="$router.push({name: 'sign up'})"
          >
            Sign up
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import firebase from 'firebase/app'

export default {
  name: 'SignIn',
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    signIn () {
      const email = this.email
      const password = this.password
      firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
        console.log(user)
      }).catch((error) => {
        console.error(error)
      })
    },
  },
}
</script>

<style scoped>

</style>