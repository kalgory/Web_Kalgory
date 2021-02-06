<template>
  <v-text-field
    validate-on-blur
    :autofocus="isAutoFocus"
    :value="value"
    :rules="rules"
    type="email"
    label="Email"
    prepend-inner-icon="mdi-account-outline"
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
      required: true,
    },
    isAutoFocus: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data: () => ({
    rules: [
      (v) => !!v || 'Email is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
  }),

  methods: {
    onInput(value) {
      this.$emit('input', value);
    },
  },
};
</script>
