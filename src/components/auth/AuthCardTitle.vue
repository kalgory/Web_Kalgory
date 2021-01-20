<template>
  <div>
    <div class="text-center pt-10">
      <v-btn @click="$router.push({name: 'home'})">
        Home
      </v-btn>
    </div>
    
    <div class="text-center font-weight-black py-6 pt-2">
      Sign in to Kalgory
    </div>
  </div>
</template>

<script>
export default {
name: "AuthCardTitle"
}
</script>

<style scoped>

</style>