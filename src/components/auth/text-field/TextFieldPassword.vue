<template>
  <v-text-field
    validate-on-blur
    :autofocus="isAutoFocus"
    :value="value"
    :rules="rules"
    type="password"
    label="Password"
    prepend-inner-icon="mdi-lock-outline"
    placeholder="Type your password"
    required
    @input="onInput"
  />
</template>

<script>
export default {
  name: 'TextFieldPassword',

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
      (v) => !!v || 'Password is required',
    ],
  }),

  methods: {
    onInput(value) {
      this.$emit('input', value);
    },
  },
};
</script>
