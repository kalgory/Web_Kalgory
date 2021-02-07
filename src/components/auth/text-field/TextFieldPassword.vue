<template>
  <v-text-field
    validate-on-blur
    :hint="hint"
    message="teST"
    :autofocus="isAutoFocus"
    :value="value"
    :rules="rules"
    :type="isVisible?'text':'password'"
    label="Password"
    prepend-inner-icon="mdi-lock-outline"
    placeholder="Type your password"
    required
    :append-icon="isVisible?'mdi-eye-off-outline':'mdi-eye-outline'"
    @click:append="isVisible=!isVisible"
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
    hint: {
      type: String,
      required: false,
      default: '',
    },
  },

  data: () => ({
    isVisible: false,
    rules: [
      (v) => !!v || 'Password is required',
      (v) => v.length > 6 || 'too short',
    ],
  }),

  methods: {
    onInput(value) {
      this.$emit('input', value);
    },
  },
};
</script>
