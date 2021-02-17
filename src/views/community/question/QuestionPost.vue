<template>
  <v-container>
    <v-row>
      <v-col>
        <read-card />
      </v-col>
    </v-row>
  </v-container>
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
