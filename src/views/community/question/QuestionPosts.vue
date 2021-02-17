<template>
  <div>
    <posts-data-iterator />
    <v-btn
      style="position: fixed; right: 2%;bottom: 10%"
      to="/community/question/create"
    >
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
  </div>
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
