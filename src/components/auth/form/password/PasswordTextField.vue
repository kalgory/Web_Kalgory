<template>
  <v-text-field
    ref="textField"
    :tabindex="tabIndex"
    validate-on-blur
    clearable
    :hint="hint"
    :error-messages="errorMessage"
    :value="value"
    :rules="rules"
    :type="isVisible?'text':'password'"
    :label="label"
    prepend-inner-icon="mdi-lock-outline"
    placeholder="Type your password"
    :append-icon="isVisible?'mdi-eye-outline':'mdi-eye-off-outline'"
    :success="isSuccess"
    @click:append="isVisible=!isVisible"
    @input="onInput"
    @focus="onFocus"
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
    isFocus: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data: () => ({
    isVisible: false,
    rules: [
      (v) => !!v || '비밀번호를 입력해주세요',
      (v) => (v || '').length >= 8 || '8자 이상 입력해주세요',
      (v) => /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(v) || '유효하지 않은 비밀번호요에요',
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
