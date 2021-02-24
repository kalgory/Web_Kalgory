<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="auto">
        <router-view :previous-route-name="isPreviousRouteExist" />
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
      vm.isPreviousRouteExist = !!from.name;
    });
  },

  data: () => ({
    isPreviousRouteExist: '',
  }),
};
</script>
