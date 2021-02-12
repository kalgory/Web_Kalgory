<template>
  <v-textarea
    outlined
    :tabindex="tabIndex"
    :rules="rules"
    :value="value"
    :rows="rows"
    label="Question Post's Body"
    @input="onInput"
  />
</template>

<script>
export default {
  name: 'BodyTextField',
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
    rows: {
      type: Number,
      required: false,
      default: 10,
    },
  },

  data: () => ({
    rules: [
      (v) => !!v || 'Body is missing',
    ],
  }),

  methods: {
    onInput(value) {
      this.$emit('input', value);
    },
  },
};
</script>
