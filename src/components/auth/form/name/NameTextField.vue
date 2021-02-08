<template>
  <v-text-field
    :tabindex="tabIndex"
    validate-on-blur
    clearable
    :hint="hint"
    maxlength="20"
    :autofocus="isAutoFocus"
    :value="value"
    :rules="rules"
    type="text"
    label="Username"
    prepend-inner-icon="mdi-account-outline"
    placeholder="Type your username"
    @input="onInput"
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
      (v) => !!v || 'Username is required',
      (v) => (v || '').length >= 2 || '너무 짧은 이름입니다',
    ],
  }),

  methods: {
    onInput(value) {
      this.$emit('input', value);
    },
  },
};
</script>
