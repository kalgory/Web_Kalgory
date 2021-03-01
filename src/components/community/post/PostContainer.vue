<template>
  <v-container>
    <v-row>
      <v-col>
        <read-card
          v-if="isCompleteRead"
          :post="post"
          :is-body-rendering-html="true"
        />
      </v-col>
    </v-row>
    <v-row>
      <answers-simple-table :reference="answerCollectionReference" />
    </v-row>
  </v-container>
</template>

<script>
import AnswersSimpleTable from '@/components/community/answers/AnswersSimpleTable.vue';
import ReadCard from '@/components/community/post/read/ReadCard.vue';
import { getQuestionCollectionReference, readPost } from '@/plugins/firebase/firestore/community';

export default {
  name: 'PostContainer',

  components: {
    ReadCard,
    AnswersSimpleTable,
  },

  data: () => ({
    post: {},
    isPostExist: false,
    isCompleteRead: false,
  }),

  computed: {
    answerCollectionReference() {
      return getQuestionCollectionReference().doc(this.$route.params.id).collection('ANSWER');
    },
  },

  created() {
    readPost(getQuestionCollectionReference(), this.$route.params.id)
      .then((snapshot) => {
        if (!snapshot.exists) {
          this.isPostExist = false;
        } else {
          this.isPostExist = true;
          this.post.id = snapshot.id;
          this.post.header = snapshot.data().header;
          this.post.body = snapshot.data().body;
          this.post.createdAt = snapshot.data().created_at;
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        this.isCompleteRead = true;
      });
  },
};
</script>
