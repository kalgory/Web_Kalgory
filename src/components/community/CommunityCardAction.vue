<template>
  <v-card-actions>
    <v-row justify="center" align="end">
      <v-col cols="5">
        <v-btn block height="100" outlined class="text-h5 font-weight-bold"
               @click="$router.push({name:'question'})">Question And Answer</v-btn>
      </v-col>
      <v-col cols="5">
        <v-btn block height="100" outlined class="text-h5 font-weight-bold"
               @click="$router.push({name:'information'})">Information</v-btn>
      </v-col>
    </v-row>
  </v-card-actions>
</template>

<script>
export default {
name: "CommunityCardAction",
}
</script>

<style scoped>

</style>