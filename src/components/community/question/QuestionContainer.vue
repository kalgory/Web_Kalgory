<template>
  <v-container>
    <v-row>
      <v-col>
        <read-card />
      </v-col>
    </v-row>
    <v-row>
      <common-simple-table
        target-collection="ANSWER"
        :read-number="10"
        :top-collection-reference="questionReference"
      />
    </v-row>
  </v-container>
</template>

<script>
import CommonSimpleTable from '@/components/community/common/CommonSimpleTable.vue';
import { getQuestionCommunityReference } from '@/plugins/firebase/firestore/community';
import ReadCard from './post/read/ReadCard.vue';

export default {
  name: 'QuestionContainer',

  components: {
    ReadCard,
    CommonSimpleTable,
  },

  computed: {
    questionReference() {
      return getQuestionCommunityReference();
    },
  },
};
</script>
