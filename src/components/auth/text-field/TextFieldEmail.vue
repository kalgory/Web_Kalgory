<template>
  <v-text-field
    validate-on-blur
    :hint="hint"
    :autofocus="isAutoFocus"
    :value="value"
    :rules="rules"
    type="email"
    label="Email"
    prepend-inner-icon="mdi-at"
    placeholder="Type your email"
    required
    @input="onInput"
  />
</template>

<script>
export default {
  name: 'TextFieldEmail',

  props: {
    value: {
      type: String,
      required: false,
      default: '',
    },
    isAutoFocus: {
      type: Boolean,
      required: false,
      default: false,
    },
    hint: {
      type: String,
      required: false,
      default: '',
    },
  },

  data: () => ({
    rules: [
      (v) => !!v || 'Email is required',
      (v) => /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v) || 'E-mail must be valid',
    ],
  }),

  methods: {
    onInput(value) {
      this.$emit('input', value);
    },
  },
};
</script>
