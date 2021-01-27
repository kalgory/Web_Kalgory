<template>
  <v-container>
    <v-row class="mx-4">
      <v-col>
        <v-btn
          text
          class="caption"
        >
          Forgot password?
        </v-btn>
      </v-col>
      <v-spacer />
      <v-col>
        <v-btn
          text
          class="caption"
          to="/auth/signup"
        >
          Sign up
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SignInCardActions',
};
</script>

<style scoped>

</style>
