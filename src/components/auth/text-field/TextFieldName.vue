<template>
  <v-text-field
    validate-on-blur
    :hint="hint"
    maxlength="20"
    :autofocus="isAutoFocus"
    :value="value"
    :rules="rules"
    type="text"
    label="Username"
    prepend-inner-icon="mdi-account-outline"
    placeholder="Type your username"
    required
    @input="onInput"
  />
</template>

<script>
export default {
  name: 'TextFieldName',

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
      (v) => !!v || 'Username is required',
      (v) => (v || '').length > 2 || 'too short',
    ],
  }),

  methods: {
    onInput(value) {
      this.$emit('input', value);
    },
  },
};
</script>
