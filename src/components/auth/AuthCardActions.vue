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
      <v-spacer/>
      <v-col>
        <v-btn
          text
          class="caption"
          router
          @click="$router.push({name: 'sign up'})"
        >
          Sign up
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AuthCardActions',
  
  props: {
    authType: {
      type: String,
      required: true,
      validator: function (value) {
        return value === 'sign in' || value === 'sign up'
      },
    },
  },
}
</script>

<style scoped>

</style>