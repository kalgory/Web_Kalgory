<template>
  <v-app>
    <app-bar v-if="isAppBarShow"/>
    
    <v-main>
      <router-view/>
    </v-main>
    
    <app-footer/>
  </v-app>
</template>

<script>
import AppBar from '@/components/app/AppBar'
import AppFooter from '@/components/app/AppFooter'

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
}
</script>