<template>
  <v-toolbar
    outlined
    :elevation="0"
  >
    <v-btn-toggle
      mandatory
    >
      <v-btn @click="onClick('bold')">
        <v-icon>mdi-format-bold</v-icon>
      </v-btn>

      <v-btn @click="onClick('italic')">
        <v-icon>mdi-format-italic</v-icon>
      </v-btn>

      <v-btn @click="onClick('link')">
        <v-icon>mdi-link</v-icon>
      </v-btn>

      <v-btn @click="onClick('quote')">
        <v-icon>mdi-format-quote-close</v-icon>
      </v-btn>

      <v-btn @click="onClick('code')">
        <v-icon>mdi-code-braces</v-icon>
      </v-btn>

      <v-btn @click="onClick('numberedList')">
        <v-icon>mdi-format-list-numbered</v-icon>
      </v-btn>

      <v-btn @click="onClick('bulletedList')">
        <v-icon>mdi-format-list-bulleted</v-icon>
      </v-btn>

      <v-btn @click="onClick('horizontal')">
        <v-icon>mdi-reorder-horizontal</v-icon>
      </v-btn>
    </v-btn-toggle>
  </v-toolbar>
</template>

<script>
export default {
  name: 'BodyToolbar',

  methods: {
    onClick(value) {
      this.$emit('click', value);
    },
  },
};
</script>

<style scoped>

</style>
