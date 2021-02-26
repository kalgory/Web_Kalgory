<template>
  <v-container>
    <v-row>
      <v-col>
        <post-read-card
          @postNotExist="isPostExist=false"
        />
      </v-col>
    </v-row>
    <v-row>
      <answer-simple-table />
    </v-row>
  </v-container>
</template>

<script>
import AnswerSimpleTable from '@/components/community/question/answer/AnswerSimpleTable.vue';
import PostReadCard from './post/read/ReadCard.vue';

export default {
  name: 'QuestionContainer',

  components: {
    PostReadCard,
    AnswerSimpleTable,
  },

  data: () => ({
    isPostExist: true,
  }),
};
</script>

<style scoped>

</style>
