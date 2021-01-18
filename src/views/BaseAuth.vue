<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <p class="text-center text-h2">
        
        </p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col>
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: 'SignIn',
}
</script>

<style scoped>

</style>