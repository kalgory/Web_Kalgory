<template>
  <v-card-text>
    <v-simple-table>
      <tbody>
      <tr v-for="item in threadList"
          :key="item.name"
          class="text-center"
      >
        <td>{{ item.name }}</td>
      </tr>
      </tbody>
    </v-simple-table>
  </v-card-text>
</template>

<script>
import {communityNewThreadRead} from '@/firebase/community'
export default {
  name: "CommunityCardText",
  props: {
    communityType: {
      type: String,
      required: true,
      validator: function (value) {
        return ['popular questions', 'questions', 'popular information', 'information'].indexOf(value) !== -1
      },
    }
  },
  created() {
    communityNewThreadRead(this.communityType)
  },
  data() {
    return {
      threadList:[],
    }
  }

}
</script>

<style scoped>

</style>