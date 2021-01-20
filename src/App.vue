<template>
  <v-app>
    <app-bar v-if="isAppBarShow"/>
    
    <v-main>
      <router-view/>
      {{ isAuth }}
    </v-main>
    
    <app-footer/>
  </v-app>
</template>

<script>
import AppBar from '@/components/app/AppBar'
import AppFooter from '@/components/app/AppFooter'
import Firebase from 'firebase/app'

export default {
  name: 'App',
  
  components: {
    AppBar,
    AppFooter,
  },
  data: () => ({
    isAuth: '',
  }),
  computed: {
    isAppBarShow () {
      switch (this.$route.name) {
        case'sign in':
          return false
        case'sign up':
          return false
        default:
          return true
      }
    },
  },
  created () {
    this.getIsAuth()
  },
  methods: {
    getIsAuth () {
      Firebase.auth().onAuthStateChanged(user => this.isAuth = !!user)
    },
  },
}
</script>