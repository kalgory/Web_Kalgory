<template>
  <v-app>
    <v-app-bar app v-if="isAppBarShow">
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
      {{isAuth}}
      {{ user.email }}
      
      <v-btn
        @click="signOut"
        v-if="isAuth"
      >
        sign out
      </v-btn>
      
      <div v-if="!isAuth">
        <v-btn text to="/auth/signin">
          Sign in
        </v-btn>
        <v-btn to="/auth/signup">
          Sign up
        </v-btn>
      </div>
    </v-app-bar>
    
    <v-main>
      <router-view/>
    </v-main>
    
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import firebase from 'firebase/app'
import InitialLogo from '@/assets/InitialLogo'
import AppFooter from '@/components/app/AppFooter'

export default {
  name: 'App',
  
  components: {
    InitialLogo,
    AppFooter
  },
  
  data: () => ({
    user: {},
    isAuth: false,
  }),
  
  computed: {
    isAppBarShow () {
      switch (this.currentRoute) {
        case'sign in':
          return false
        case'sign up':
          return false
        default:
          return true
      }
    },
    currentRoute () {
      return this.$route.name
    },
  },
  
  created () {
    this.readUser()
  },
  
  methods: {
    readUser () {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // console.log('Auth state changed')
          // console.log(user)
          this.user = user
          this.isAuth = true
        } else {
          this.user = {}
          console.log('User not exist')
          this.isAuth = false
        }
      })
    },
    signOut () {
      firebase.auth().signOut()
    },
  },
}
</script>