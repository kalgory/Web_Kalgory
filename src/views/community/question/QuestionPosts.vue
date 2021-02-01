<template>
  <v-container>
    <v-row justify="end">
      <v-btn to="/community/question/create">
        Post 생성
      </v-btn>
    </v-row>
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
