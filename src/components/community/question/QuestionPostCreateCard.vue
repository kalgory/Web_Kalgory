<template>
  <v-card>
    <v-card-text>질문 생성</v-card-text>
    <create-card-template />
  </v-card>
</template>

<script>
import CreateCardTemplate from './CreateCardTemplate.vue';

export default {
  name: 'QuestionPostCreateCard',
  components: {
    CreateCardTemplate,
  },
};
</script>

<style scoped>

</style>
