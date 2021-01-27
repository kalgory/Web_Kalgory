<template>
  <v-card-text>
    <v-simple-table>
      <tbody>
        <tr
          v-for="(item,index) in posts"
          :key="index"
          class="text-center"
          @click="$router.push({name:'question thread',params:{id:item.id, currentThread:item}})"
        >
          <td>{{ item.header }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-card-text>
</template>

<script>
import readNewPost from '@/plugins/firebase/firestore/community';

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
    if (this.communityType.indexOf('questions') !== -1) readNewPost(this.communityType, this.posts);
  },

};
</script>

<style scoped>

</style>
