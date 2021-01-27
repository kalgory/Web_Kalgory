<template>
  <v-container>
    <v-row
      class="mx-4"
      align="center"
    >
      <v-spacer />
      <v-col cols="auto mr-n4">
        <p class="caption my-auto ">
          Already have accounts?
        </p>
      </v-col>
      <v-col cols="auto">
        <v-btn
          text
          class="caption"
          to="/auth/signin"
        >
          Sign in
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SignUpCardActions',
};
</script>

<style scoped>

</style>
