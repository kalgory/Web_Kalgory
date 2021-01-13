<template>
  <v-app>
    <v-app-bar
      app
      color="#121212"
    >
      <v-img
        src="./assets/logo-initial-background.svg"
      >
      </v-img>
      <v-img
        src="./assets/logo-text.svg"
      >
      </v-img>

    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    
    <v-footer
      app
    >
      <p class="ma-0 font-weight-thin">Copyright © 2021 Kalgory</p>
    </v-footer>
  </v-app>
</template>


<script>


export default {
  name: 'App',

  components: {},

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