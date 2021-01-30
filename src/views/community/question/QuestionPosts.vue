<template>
  <div>
    <posts-table />
    <v-btn to="/community/question/create" />
  </div>
</template>

<script>
import PostsTable from '@/components/community/question/posts/PostsTable.vue';

export default {
  name: 'QuestionPosts',
  components: {
    PostsTable,
  },
};
</script>

<style scoped>

</style>
