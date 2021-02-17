<template>
  <v-card-actions>
    <v-container>
      <v-row justify="end">
        <v-col
          v-if="communityType==='questions'"
          offset="11"
        >
          <v-btn
            icon
            @click="$router.push('/community/question')"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-col>
        <v-col
          v-if="communityType==='information'"
          offset="11"
        >
          <v-btn
            icon
            @click="$router.push('/community/information')"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card-actions>
</template>

<script>
export default {
  name: 'DefaultCardAction',
  props: {
    communityType: {
      type: String,
      required: true,
      validator(value) {
        return ['popular questions', 'questions', 'popular information', 'information'].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style scoped>

</style>
