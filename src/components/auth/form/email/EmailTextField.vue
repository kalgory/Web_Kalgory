<template>
  <v-text-field
    :tabindex="tabIndex"
    validate-on-blur
    clearable
    :hint="hint"
    :autofocus="isAutoFocus"
    :value="value"
    :rules="rules"
    type="email"
    label="Email"
    prepend-inner-icon="mdi-at"
    placeholder="Type your email"
    @input="onInput"
  />
</template>

<script>
export default {
  name: 'EmailTextField',

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
  },

  data: () => ({
    rules: [
      (v) => !!v || '이메일을 입력해주세요',
      (v) => /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v) || '유효하지 않은 이메일이에요',
    ],
  }),

  methods: {
    onInput(value) {
      this.$emit('input', value);
    },
  },
};
</script>
