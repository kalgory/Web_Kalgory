<template>
  <v-app>
    <app-bar/>
    
    <v-main>
      <router-view/>
    </v-main>
    
    <app-footer/>
  </v-app>
</template>

<script>
import AppBar from '@/components/app/AppBar'
import AppFooter from '@/components/app/AppFooter'
import { onAuthStateChanged } from '@/firebase/auth'

export default {
  name: 'App',
  
  components: {
    AppBar,
    AppFooter,
  },
  
  created () {
    this.$store.commit('setIsLoading', true)
    onAuthStateChanged((user) => {
      // this.$cookies.set('isAuth', true)
      this.$store.commit('setIsAuth', true)
      this.$store.commit('setUser', user)
      this.$store.commit('setIsLoading', false)
    }, () => {
      // this.$cookies.set('isAuth', false)
      this.$store.commit('setIsAuth', false)
      this.$store.commit('setUser', null)
      this.$store.commit('setIsLoading', false)
    })
  },
}
</script>