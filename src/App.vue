<template>
  <v-app>
    <app-bar v-if="isAppBarShow"/>
    
    <v-main>
      <router-view/>
      {{ $store.getters.getIsAuth }}
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
    onAuthStateChanged((user) => {
      this.$store.commit('setIsAuth', true)
      this.$store.commit('setUser', user)
    }, () => {
      this.$store.commit('setIsAuth', false)
      this.$store.commit('setUser', null)
    })
  },
}
</script>