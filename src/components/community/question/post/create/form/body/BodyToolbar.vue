<template>
  <v-toolbar
    outlined
    :elevation="0"
  >
    <v-btn-toggle
      v-model="toggle_exclusive"
      mandatory
    >
      <v-btn>
        <v-icon>mdi-format-bold</v-icon>
      </v-btn>

      <v-btn>
        <v-icon>mdi-format-italic</v-icon>
      </v-btn>

      <v-btn>
        <v-icon>mdi-format-underline</v-icon>
      </v-btn>
    </v-btn-toggle>
  </v-toolbar>
</template>

<script>
export default {
  name: 'BodyToolbar',

  data: () => ({
    toggle_exclusive: undefined,
  }),

};
</script>

<style scoped>

</style>
