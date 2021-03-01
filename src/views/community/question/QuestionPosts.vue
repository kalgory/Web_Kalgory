<template>
  <div>
    <posts-simple-table :reference="reference" />
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
import { getQuestionCollectionReference } from '@/plugins/firebase/firestore/community';

export default {
  name: 'QuestionPosts',

  components: {
    PostsSimpleTable,
  },

  computed: {
    reference() {
      return getQuestionCollectionReference();
    },
  },
};
</script>
