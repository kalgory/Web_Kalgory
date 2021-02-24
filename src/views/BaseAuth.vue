<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="auto">
        <router-view :previous-route-name="previousRouteName" />
      </v-col>
      {{ previousRouteName }}
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'BaseAuth',

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // eslint-disable-next-line no-param-reassign
      vm.previousRouteName = from.name;
    });
  },

  data: () => ({
    previousRouteName: '',
  }),
};
</script>
