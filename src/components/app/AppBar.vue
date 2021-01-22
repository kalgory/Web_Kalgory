<template>
  <v-app-bar app>
    <initial-logo/>
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
    
    <v-btn v-if="$store.getters.getIsAuth" @click="signOut">
      sign out
    </v-btn>
    
    <v-btn v-if="!$store.getters.getIsAuth" text to="/auth/signin">
      Sign in
    </v-btn>
    <v-btn v-if="!$store.getters.getIsAuth" to="/auth/signup">
      Sign up
    </v-btn>
  
  </v-app-bar>
</template>

<script>
import InitialLogo from '@/assets/InitialLogo'

export default {
  name: 'AppBar',
  
  components: {
    InitialLogo,
  },
  
  methods: {
    signOut () {
      this.$store.dispatch('actSignOut')
    },
  },
}
</script>

<style scoped>

</style>