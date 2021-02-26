<template>
  <v-container>
    <v-row>
      <v-col>
        <post-read-card />
      </v-col>
    </v-row>
    <v-row>
      <posts-data-iterator
        target-collection="ANSWER"
        :read-number="10"
        :top-collection-reference="questionReference"
      />
    </v-row>
  </v-container>
</template>

<script>
import PostsDataIterator from '@/components/community/common/table/TableSimpleTable.vue';
import { getQuestionCommunityReference } from '@/plugins/firebase/firestore/community';
import PostReadCard from './post/read/ReadCard.vue';

export default {
  name: 'QuestionContainer',

  components: {
    PostReadCard,
    PostsDataIterator,
  },

  computed: {
    questionReference() {
      return getQuestionCommunityReference();
    },
  },
};
</script>
