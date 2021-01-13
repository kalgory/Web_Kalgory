<template>
  <v-app>
    <v-app-bar
      app
      color="#121212"
    >

    </v-app-bar>

    <v-main>

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