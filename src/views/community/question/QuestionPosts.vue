<template>
  <div>
    <posts-data-iterator target-collection="QUESTION" />
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
import PostsDataIterator from '@/components/community/common/table/TableSimpleTable.vue';

export default {
  name: 'QuestionPosts',
  components: {
    PostsDataIterator,
  },
};
</script>
