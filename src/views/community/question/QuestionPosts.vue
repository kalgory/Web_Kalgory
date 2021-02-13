<template>
  <v-container>
    <posts-data-iterator />
  </v-container>
</template>

<script>
import PostsDataIterator from '@/components/community/question/posts/PostsDataIterator.vue';

export default {
  name: 'QuestionPosts',
  components: {
    PostsDataIterator,
  },
};
</script>

<style scoped>

</style>
