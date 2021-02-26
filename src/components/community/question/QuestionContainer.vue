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
      <answer-read-card v-if="isPostExist" />
    </v-row>
  </v-container>
</template>

<script>
import PostReadCard from './post/read/ReadCard.vue';
import AnswerReadCard from './answer/data/DataCard.vue';

export default {
  name: 'QuestionContainer',

  components: {
    PostReadCard,
    AnswerReadCard,
  },

  data: () => ({
    isPostExist: true,
  }),
};
</script>

<style scoped>

</style>
