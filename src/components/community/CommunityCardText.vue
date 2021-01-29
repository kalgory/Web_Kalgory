<template>
  <v-card-text>
    <v-expansion-panels>
      <v-expansion-panel
        v-for="(post, i) in posts"
        :key="i"
      >
        <v-expansion-panel-header class="v-list-item--three-line">
          {{ post.header }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ post.body }}
          <v-btn @click="$router.push({name:'question post', params:{id:post.id}})" />
        </v-expansion-panel-content>
        <v-expand-transition />
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card-text>
</template>

<script>
import { readPosts } from '@/plugins/firebase/firestore/community';
import { getQuestionCommunityReference } from '@/plugins/firebase/firestore/community/reference';

export default {
  name: 'CommunityCardText',

  props: {
    communityType: {
      type: String,
      required: true,
      validator(value) {
        return ['popular questions', 'questions', 'popular information', 'information'].indexOf(value) !== -1;
      },
    },
  },

  data() {
    return {
      posts: [],
    };
  },

  created() {
    if (this.communityType === 'questions') {
      readPosts(getQuestionCommunityReference(), 5)
        .then((posts) => {
          console.log(posts);
          this.posts = posts;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  },

};
</script>

<style scoped>

</style>
