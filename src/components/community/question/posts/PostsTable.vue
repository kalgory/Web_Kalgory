<template>
  <v-simple-table>
    <tbody>
      <tr
        v-for="(post,index) in questionPosts"
        :key="index"
        @click="$router.push({path:`/community/question/${post.id}`})"
      >
        <td>{{ post.header }}</td>
        <td>{{ post.body }}</td>
        <td>{{ post.createdAt }}</td>
      </tr>
    </tbody>
  </v-simple-table>
</template>

<script>
import { readPosts } from '@/plugins/firebase/firestore/community';
import { getQuestionCommunityReference } from '@/plugins/firebase/firestore/community/reference';

export default {
  name: 'QuestionPostsTable',

  data: () => ({
    questionPosts: [],
  }),

  created() {
    readPosts(getQuestionCommunityReference(), 10)
      .then((posts) => {
        console.log(posts);
        this.questionPosts = posts;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style scoped>

</style>
