<template>
  <v-text-field
    :tabindex="tabIndex"
    validate-on-blur
    clearable
    :hint="hint"
    :autofocus="isAutoFocus"
    :error-messages="errorMessage"
    :value="value"
    :rules="rules"
    :type="isVisible?'text':'password'"
    :label="label"
    prepend-inner-icon="mdi-lock-outline"
    placeholder="Type your password"
    :append-icon="isVisible?'mdi-eye-off-outline':'mdi-eye-outline'"
    :success="isSuccess"
    @click:append="isVisible=!isVisible"
    @input="onInput"
    @blur="onBlur"
  />
</template>

<script>
export default {
  name: 'PasswordTextField',

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
    tabIndex: {
      type: Number,
      required: true,
    },
    label: {
      type: String,
      required: false,
      default: 'Password',
    },
    errorMessage: {
      type: String,
      required: false,
      default: '',
    },
    isSuccess: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data: () => ({
    isVisible: false,
    rules: [
      (v) => !!v || 'Password is required',
      (v) => (v || '').length >= 6 || 'too short',
    ],
  }),

  methods: {
    onInput(value) {
      this.$emit('input', value);
    },
    onBlur() {
      this.$emit('blur');
    },
  },
};
</script>
