<template>
  <v-simple-table>
    <tbody>
      <tr
        v-for="(post,index) in questionPosts"
        :key="index"
        @click="$router.push({path:`/question/${post.id}`})"
      >
        <td>{{ post.header }}</td>
        <td>{{ post.body }}</td>
        <td>{{ post.created_time }}</td>
      </tr>
    </tbody>
  </v-simple-table>
</template>

<script>
import { readPosts } from '@/plugins/firebase/firestore/community';
import { getQuestionCommunityReference } from '@/plugins/firebase/firestore/community/reference';

export default {
  name: 'QuestionPosts',

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
