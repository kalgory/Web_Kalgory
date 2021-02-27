<template>
  <v-container>
    <v-row>
      <v-col>
        <read-card
          :post="post"
          :is-body-rendering-html="true"
        />
      </v-col>
    </v-row>
    <v-row>
      <answers-simple-table :reference="answerReference" />
    </v-row>
  </v-container>
</template>

<script>
import AnswersSimpleTable from '@/components/community/answers/AnswersSimpleTable.vue';
import { getQuestionCommunityReference, getSubCollectionReference, readPost } from '@/plugins/firebase/firestore/community';
import ReadCard from '@/components/community/post/read/ReadCard.vue';

export default {
  name: 'PostContainer',

  components: {
    ReadCard,
    AnswersSimpleTable,
  },

  data: () => ({
    post: {},
    isPostExist: false,
  }),

  computed: {
    answerReference() {
      return getSubCollectionReference(getQuestionCommunityReference(), this.$route.params.id, 'ANSWER');
    },
  },

  created() {
    readPost(getQuestionCommunityReference(), this.$route.params.id)
      .then((post) => {
        this.isPostExist = true;
        this.post = post;
      })
      .catch((error) => {
        if (error === 'no such document') {
          this.isPostExist = false;
        } else {
          console.error(error);
        }
      });
  },
};
</script>
