<template>
  <v-textarea
    ref="textarea"
    label="Question Post's Body"
    outlined
    :tabindex="tabIndex"
    :rules="rules"
    :value="value"
    :rows="rows"
    :error-messages="errorMessage"
    :validate-on-blur="isValidateOnBlur"
    @input="onInput"
    @focus="onFocus"
    @blur="onBlur"
    @update:error="onError"
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
    isFocus: {
      type: Boolean,
      required: false,
      default: false,
    },
    isValidateOnBlur: {
      type: Boolean,
      required: true,
    },
  },

  data: () => ({
    rules: [
      (v) => !!v || 'Body is missing',
      (v) => (v || '').length >= 30 || `Body must be at least 30 characters; you entered ${v.length}`,
      (v) => (v || '').length <= 10000 || `Body cannot be longer than 10000 characters. ${v.length}`,
    ],
  }),

  watch: {
    isFocus(value) {
      if (value) {
        this.$refs.textarea.$refs.input.focus();
      } else {
        this.$refs.textarea.$refs.input.blur();
      }
    },
  },

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
    onError(value) {
      this.$emit('error', value);
    },
  },
};
</script>
