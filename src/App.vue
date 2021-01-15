<template>
  <v-app>
    <v-app-bar app color="">
      <initial-logo></initial-logo>
      <v-spacer/>
      <v-btn>qwerty</v-btn>
    </v-app-bar>
    
    <v-main>
      <router-view></router-view>
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
  
  data: () => ({
    links: [
      'test',
      'Problem solve',
      'Algorithm',
      'Profile',
      'Updates',
    ],
  }),
}
</script>