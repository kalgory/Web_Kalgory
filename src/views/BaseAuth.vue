<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="auto">
        <router-view :has-previous-route="hasPreviousRoute" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'BaseAuth',

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // eslint-disable-next-line no-param-reassign
      vm.hasPreviousRoute = !!from.name;
    });
  },

  data: () => ({
    hasPreviousRoute: false,
  }),
};
</script>
