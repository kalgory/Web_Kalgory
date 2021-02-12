<template>
  <v-textarea
    outlined
    :tabindex="tabIndex"
    :rules="rules"
    :value="value"
    :rows="rows"
    :error-messages="errorMessage"
    label="Question Post's Body"
    @input="onInput"
    @focus="onFocus"
    @blur="onBlur"
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
    errorMessage: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    rules: [
      (v) => !!v || 'Body is missing',
      (v) => (v || '').length >= 30 || `Body must be at least 30 characters; you entered ${v.length}`,
    ],
  }),

  methods: {
    onBlur() {
      this.$emit('blur');
    },
    onFocus() {
      this.$emit('focus');
    },
    onInput(value) {
      this.$emit('input', value);
    },
  },
};
</script>
