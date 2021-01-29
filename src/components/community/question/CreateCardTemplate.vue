<template>
  <div>
    <v-row>
      <v-col
        cols="3"
        offset="1"
      >
        <v-text-field label="header" />
      </v-col>
      <v-col
        cols="2"
        offset="5"
      >
        <v-text-field label="username" />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="10"
      >
        <v-textarea
          outlined
          rows="10"
          no-resize
          label="body"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'CreateCardTemplate',

};
</script>

<style scoped>

</style>
