<template>
  <v-text-field
    ref="textField"
    :tabindex="tabIndex"
    :validate-on-blur="isValidateOnBlur"
    clearable
    :hint="hint"
    maxlength="20"
    :value="value"
    :rules="rules"
    type="text"
    label="Username"
    prepend-inner-icon="mdi-account-outline"
    placeholder="Type your username"
    @input="onInput"
    @focus="onFocus"
    @blur="onBlur"
  />
</template>

<script>
export default {
  name: 'NameTextField',

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
    isFocus: {
      type: Boolean,
      required: false,
      default: false,
    },
    isValidateOnBlur: {
      type: Boolean,
      required: false,
    },
  },

  data: () => ({
    rules: [
      (v) => !!v || '이름을 입력해주세요',
      (v) => (v || '').length >= 2 || '너무 짧은 이름입니다',
    ],
  }),

  computed: {
    hasError() {
      return this.$refs.textField.hasError;
    },
  },

  watch: {
    isFocus(value) {
      if (value) {
        this.$refs.textField.$refs.input.focus();
      } else {
        this.$refs.textField.$refs.input.blur();
      }
    },
  },

  mounted() {
    this.$watch('hasError', (value) => {
      this.$emit('error', value);
    });
  },

  methods: {
    onBlur() {
      this.$emit('blur');
    },
    onFocus() {
      this.$emit('focus');
    },
    onInput(value) {
      this.$refs.textField.validate();
      this.$emit('input', value);
    },
  },
};
</script>
