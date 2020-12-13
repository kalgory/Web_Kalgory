<template>
  <v-card
      elevation="24"
      outlined
      shaped
      tile
  >
    <v-card-title>
      Welcome to Kalgory
    </v-card-title>

    <v-card-text>
      If you want to continue, please authenticate yourself in one of the following ways:
    </v-card-text>

    <v-card-actions>
      <v-btn>
        Sign in
      </v-btn>

      <v-btn>
        Continue as visitor
      </v-btn>

      <v-btn
          text
      >
        Sign up kalgory
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Auth',
}
</script>

<style scoped>

</style>