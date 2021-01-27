<template>
  <v-card outlined>
    <v-card-title v-text="currentThread.header" />
  </v-card>
</template>

<script>
export default {
  name: "QuestionThread",
  data() {
    return {
      currentThread: {},
    }
  },
  created() {
    this.currentThread = this.$route.params.currentThread

    console.log(this.currentThread)
  }

}
</script>

<style scoped>

</style>