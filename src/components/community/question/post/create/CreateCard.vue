<template>
  <v-card>
    <v-card-text>질문 생성</v-card-text>
    <create-form />
  </v-card>
</template>

<script>
import CreateForm from './CreateForm.vue';

export default {
  name: 'CreateCard',
  components: {
    CreateForm,
  },
};
</script>

<style scoped>

</style>
