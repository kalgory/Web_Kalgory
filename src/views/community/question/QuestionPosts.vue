<template>
  <div>
    <posts-table />
    <posts-btn />
  </div>
</template>

<script>
import PostsTable from '@/components/community/question/posts/PostsTable.vue';
import PostsBtn from '@/components/community/question/posts/PostsBtn.vue';

export default {
  name: 'QuestionPosts',
  components: {
    PostsTable,
    PostsBtn,
  },
};
</script>

<style scoped>

</style>
