<template>
  <v-row class="mt-2">
    <v-col>
      <read-card />
    </v-col>
  </v-row>
</template>

<script>
import ReadCard from '@/components/community/question/post/read/ReadCard.vue';

export default {
  name: 'QuestionPost',
  components: {
    ReadCard,
  },

};
</script>

<style scoped>

</style>
