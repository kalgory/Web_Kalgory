<template>
  <v-text-field
    :value="value"
    type="password"
    label="Password"
    prepend-inner-icon="mdi-account-outline"
    placeholder="Type your password"
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
  },

  methods: {
    onInput(value) {
      this.$emit('input', value);
    },
  },
};
</script>
