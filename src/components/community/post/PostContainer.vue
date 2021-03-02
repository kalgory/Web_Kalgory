<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10">
        <v-skeleton-loader
          v-show="isLoading"
          type="table-heading, list-item-two-line"
        />
        <read-card
          v-show="!isLoading"
          :post="post"
        />
      </v-col>
    </v-row>
    <v-row>
      <answers-container :reference="answerCollectionReference" />
    </v-row>
  </v-container>
</template>

<script>
import AnswersContainer from '@/components/community/answers/AnswersContainer.vue';
import ReadCard from '@/components/community/post/read/ReadCard.vue';
import { getQuestionCollectionReference, readPost } from '@/plugins/firebase/firestore/community';

export default {
  name: 'PostContainer',

  components: {
    ReadCard,
    AnswersContainer,
  },

  data: () => ({
    post: {},
    isPostExist: false,
    isLoading: true,
  }),

  computed: {
    answerCollectionReference() {
      return getQuestionCollectionReference().doc(this.$route.params.id).collection('ANSWER');
    },
  },

  created() {
    this.readPost();
  },

  methods: {
    readPost() {
      readPost(getQuestionCollectionReference(), this.$route.params.id)
        .then((snapshot) => {
          if (!snapshot.exists) {
            this.isPostExist = false;
          } else {
            this.isPostExist = true;
            const post = {};
            post.id = snapshot.id;
            post.header = snapshot.data().header;
            post.body = snapshot.data().body;
            post.createdAt = snapshot.data().created_at;
            this.post = post;
          }
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>
