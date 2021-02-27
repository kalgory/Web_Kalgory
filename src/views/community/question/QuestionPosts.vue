<template>
  <div>
    <posts-simple-table collection-name="QUESTION" />
    <v-btn
      fixed
      right
      top
      class="mt-15"
      to="/community/question/create"
    >
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
  </div>
</template>

<script>
import PostsSimpleTable from '@/components/community/posts/PostsSimpleTable.vue';

export default {
  name: 'QuestionPosts',

  components: {
    PostsSimpleTable,
  },
};
</script>
