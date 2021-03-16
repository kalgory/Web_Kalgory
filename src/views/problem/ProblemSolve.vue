<template>
  <v-container>
    <v-row>
      {{ id }}
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ProblemSolve',

  computed: {
    id() {
      return this.$route.params.id;
    },
  },
};
</script>
