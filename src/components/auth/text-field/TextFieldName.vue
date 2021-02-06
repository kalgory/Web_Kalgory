<template>
  <v-text-field
    :value="value"
    type="email"
    label="Username"
    prepend-inner-icon="mdi-account-outline"
    placeholder="Type your username"
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
  },

  methods: {
    onInput(value) {
      this.$emit('input', value);
    },
  },
};
</script>
