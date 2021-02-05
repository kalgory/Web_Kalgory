<template>
  <v-text-field
    :value="value"
    type="email"
    label="Email"
    prepend-inner-icon="mdi-account-outline"
    placeholder="Type your email"
    @input="onInput"
  />
</template>

<script>
export default {
  name: 'TextFieldEmail',

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
