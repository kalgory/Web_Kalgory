<template>
  <v-app>
    <v-app-bar app v-if="true">
      <initial-logo></initial-logo>
      <v-btn
        @click="$router.push({name: 'problem'})"
      >
        problem
      </v-btn>
      <v-btn
        @click="$router.push({name: 'concept'})"
      >
        concept
      </v-btn>
      <v-btn
        @click="$router.push({name: 'community'})"
      >
        community
      </v-btn>
      <v-spacer/>
      <v-btn
        @click="$router.push({name: 'sign in'})"
      >
        Sign in
      </v-btn>
    </v-app-bar>
    
    <v-main>
      <router-view/>
    </v-main>
    
    <v-footer app>
      <p class="ma-0 font-weight-thin">Copyright © 2021 Kalgory</p>
    </v-footer>
  </v-app>
</template>

<script>
import InitialLogo from '@/assets/InitialLogo'

export default {
  name: 'App',
  
  components: {
    InitialLogo,
  },
}
</script>