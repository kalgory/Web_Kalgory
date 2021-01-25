<template>
  <v-card-actions>
    <v-row justify="end">
      <v-col offset="11" v-if="communityType==='questions'">
        <v-btn icon
               @click="$router.push({name:'question'})"><v-icon>mdi-plus</v-icon></v-btn>
      </v-col>
      <v-col offset="11" v-if="communityType==='information'">
        <v-btn icon
               @click="$router.push({name:'information'})"><v-icon>mdi-plus</v-icon></v-btn>
      </v-col>
    </v-row>
  </v-card-actions>
</template>

<script>
export default {
name: "CommunityCardAction",
  props: {
    communityType: {
      type: String,
      required: true,
      validator: function (value) {
        return ['popular questions', 'questions', 'popular information', 'information'].indexOf(value) !== -1
      },
    }
  },
}
</script>

<style scoped>

</style>