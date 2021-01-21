<template>
  <v-app-bar app>
    <initial-logo></initial-logo>
    <v-btn text to="/problem">
      problem
    </v-btn>
    <v-btn text to="/concept">
      concept
    </v-btn>
    <v-btn text to="/community">
      community
    </v-btn>
    <v-spacer/>
    <v-btn
      @click="signOut"
    >
      sign out
    </v-btn>
    
    <div>
      <v-btn text to="/auth/signin">
        Sign in
      </v-btn>
      <v-btn to="/auth/signup">
        Sign up
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import Firebase from 'firebase/app'
import InitialLogo from '@/assets/InitialLogo'

export default {
  name: 'AppBar',
  
  components: {
    InitialLogo,
  },
  
  methods: {
    signOut () {
      Firebase.auth().signOut().then(() => {
        console.log('Sign out success')
      }).catch((error) => {
        console.log(error)
      })
    },
  },
}
</script>

<style scoped>

</style>