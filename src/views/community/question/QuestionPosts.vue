<template>
  <div>
    <posts-container :reference="reference" />
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
import PostsContainer from '@/components/community/posts/PostsContainer.vue';
import { getQuestionCollectionReference } from '@/plugins/firebase/firestore/community';

export default {
  name: 'QuestionPosts',

  components: {
    PostsContainer,
  },

  computed: {
    reference() {
      return getQuestionCollectionReference();
    },
  },
};
</script>
