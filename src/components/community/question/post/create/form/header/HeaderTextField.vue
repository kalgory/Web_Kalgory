<template>
  <v-text-field
    outlined
    :rules="rules"
    :tabindex="tabIndex"
    placeholder="Please write the summary of the body"
    label="Question Post's header"
  />
</template>

<script>
export default {
  name: 'HeaderTextField',
  props: {
    value: {
      type: String,
      required: false,
      default: '',
    },
    tabIndex: {
      type: Number,
      required: true,
    },
  },

  data: () => ({
    rules: [
      (v) => !!v || 'Header is missing',
      (v) => (v || '').length >= 15 || 'Title must be at least 15 characters.',
    ],
  }),

  methods: {
    onInput(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style scoped>

</style>
