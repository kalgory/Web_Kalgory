<template>
  <div>
    <QuestionPostsTable />
    <v-btn @click="$router.push({path:`/community/question/create`})" />
  </div>
</template>

<script>
import QuestionPostsTable from '@/components/community/question/QuestionPostsTable.vue';

export default {
  name: 'QuestionPosts',
  components: {
    QuestionPostsTable,
  },
};
</script>

<style scoped>

</style>
