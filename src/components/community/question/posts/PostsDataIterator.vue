<template>
  <v-data-iterator
    id="scroll-target"
    :items="posts"
    :search="searchText"
    hide-default-footer
  >
    <template #header>
      <v-row justify="center">
        <v-col
          cols="8"
        >
          <v-text-field
            v-model="searchText"
            prepend-inner-icon="mdi-table-search"
          />
        </v-col>
      </v-row>
    </template>
    <template #default="props">
      <v-row
        v-for="(post,index) in props.items"
        :key="index"
        justify="center"
      >
        <v-col
          cols="8"
        >
          <v-card>
            <v-card-title class="font-weight-bold">
              {{ post.header }}
            </v-card-title>
            <v-card-text
              class="font-weight-bold"
              v-text="getProcessedBody(post.body,post.isExpand)"
            />
            <v-card-actions>
              <v-row>
                <v-col offset="11">
                  <v-btn
                    icon
                    @click="post.isExpand=!post.isExpand"
                  >
                    <v-icon v-if="post.isExpand">
                      mdi-chevron-up
                    </v-icon>
                    <v-icon v-if="!post.isExpand">
                      mdi-chevron-down
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      {{ offsetTop }}
      <v-progress-circular
        v-intersect="onIntersect"
        indeterminate
        class="center"
      />
    </template>
  </v-data-iterator>
</template>

<script>
import { readPosts, getQuestionCommunityReference } from '@/plugins/firebase/firestore/community';

export default {
  name: 'QuestionDataIterator',

  data: () => ({
    isLoading: true,
    posts: [],
    searchText: '',
    lastSnapshot: {},
    offsetTop: 0,
  }),

  created() {
    this.readPosts();
  },

  methods: {
    onScroll(e) {
      console.log('?');
      this.offsetTop = e.Target.scrollTop;
    },
    getProcessedBody(body, isExpand) {
      if (body.length >= 170 && isExpand === false) {
        return `${body.substr(0, 170)}...`;
      }
      return body;
    },

    readPosts() {
      this.isLoading = true;
      readPosts(getQuestionCommunityReference(), 3, this.lastSnapshot)
        .then((querySnapshot) => {
          querySnapshot.forEach((snapshot) => {
            this.posts.push({
              id: snapshot.id,
              header: snapshot.data().header,
              body: snapshot.data().body,
              createdAt: snapshot.data().created_at,
              isExpand: false,
            });
          });
          this.lastSnapshot = querySnapshot.docs[querySnapshot.size - 1];
          this.isLoading = false;
        })
        .catch((error) => {
          this.isLoading = false;
          console.error(error);
        });
    },

  },
};
</script>

<style scoped>

</style>
