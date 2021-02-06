<template>
  <v-text-field
    validate-on-blur
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
      (v) => !!v || 'Usrename is required',
    ],
  }),

  methods: {
    onInput(value) {
      this.$emit('input', value);
    },
  },
};
</script>
