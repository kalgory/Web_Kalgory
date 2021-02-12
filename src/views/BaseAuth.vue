<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="auto">
        <router-view />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SignIn',
};
</script>
