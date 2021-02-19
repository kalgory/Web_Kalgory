<template>
  <v-toolbar
    outlined
    :elevation="0"
  >
    <v-btn-toggle
      v-model="toggle_exclusive"
      mandatory
    >
      <v-btn @click="onClick('bold')">
        <v-icon>mdi-format-bold</v-icon>
      </v-btn>

      <v-btn @click="onClick('italic')">
        <v-icon>mdi-format-italic</v-icon>
      </v-btn>
    </v-btn-toggle>
  </v-toolbar>
</template>

<script>
export default {
  name: 'BodyToolbar',

  data: () => ({
    toggle_exclusive: undefined,
  }),

  methods: {
    onClick(value) {
      this.$emit('click', value);
    },
  },
};
</script>

<style scoped>

</style>
