<template>
  <v-text-field
    ref="textField"
    outlined
    :rules="rules"
    :tabindex="tabIndex"
    placeholder="Please write the summary of the body"
    @input="onInput"
    @focus="onFocus"
    @blur="onBlur"
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
    isFocus: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data: () => ({
    rules: [
      (v) => !!v || 'Header is missing',
      (v) => (v || '').length >= 15 || 'Header must be at least 15 characters.',
      (v) => (v || '').length <= 100 || 'Header cannot be longer than 150 characters.',
    ],
  }),

  watch: {
    isFocus(value) {
      if (value) {
        this.$refs.textField.$refs.input.focus();
      } else {
        this.$refs.textField.$refs.input.blur();
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
  },
};
</script>

<style scoped>

</style>
