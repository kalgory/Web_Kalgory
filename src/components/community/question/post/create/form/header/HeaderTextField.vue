<template>
  <v-text-field
    outlined
    :rules="rules"
    :tabindex="tabIndex"
    error-messages="???"
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
      (v) => !!v || 'Post의 Header 입력해주세요.',
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
