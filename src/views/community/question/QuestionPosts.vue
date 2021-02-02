<template>
  <v-container>
    <v-row justify="end">
      <v-btn to="/community/question/create">
        Post 생성
      </v-btn>
    </v-row>
    <Test />
  </v-container>
</template>

<script>
// import PostsDataIterator from '@/components/community/question/posts/PostsDataIterator.vue';
import Test from '@/components/community/question/posts/test.vue';

export default {
  name: 'QuestionPosts',
  components: {
    // PostsDataIterator,
    Test,
  },
};
</script>

<style scoped>

</style>
