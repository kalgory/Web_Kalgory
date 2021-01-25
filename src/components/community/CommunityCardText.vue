<template>
  <v-card-text>
    <v-simple-table>
      <tbody>
      <tr v-for="item in textArray"
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

  },
  data() {
    return {
      textArray: [
        {
          name: 'a',
        },
        {
          name: 'b',
        },
        {
          name: 'c',
        },
        {
          name: 'd',
        },
        {
          name: 'e',
        },

      ],
    }
  }

}
</script>

<style scoped>

</style>