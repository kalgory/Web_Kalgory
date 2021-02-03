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
          <v-btn @click="$router.push({path:`/community/question/${post.id}`})" />
        </v-expansion-panel-content>
        <v-expand-transition />
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card-text>
</template>

<script>
import { readPosts, getQuestionCommunityReference } from '@/plugins/firebase/firestore/community';

export default {
  name: 'DefaultCardText',

  props: {
    communityType: {
      type: String,
      required: true,
      validator(value) {
        return ['popular questions', 'questions', 'popular information', 'information'].indexOf(value) !== -1;
      },
    },
  },

  data: () => ({
    posts: [],
  }),

  created() {
    if (this.communityType === 'questions') {
      readPosts(getQuestionCommunityReference(), 5, {})
        .then((querySnapshot) => {
          querySnapshot.forEach((snapshot) => {
            this.posts.push({
              id: snapshot.id,
              header: snapshot.data().header,
              body: snapshot.data().body,
              createdAt: snapshot.data().created_at,
            });
          });
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
