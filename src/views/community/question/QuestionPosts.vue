<template>
  <div>
    <QuestionPostsTable />
    <v-btn to="/community/question/create" />
  </div>
</template>

<script>
import QuestionPostsTable from '@/components/community/question/posts/PostsTable.vue';

export default {
  name: 'QuestionPosts',
  components: {
    QuestionPostsTable,
  },
};
</script>

<style scoped>

</style>
