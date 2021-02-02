<template>
  <div>
    <div class="text-center pt-10">
      <v-btn to="/">
        Home
      </v-btn>
    </div>

    <div
      v-once
      class="text-center font-weight-black py-6 pt-2"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthCardTitle',
};
</script>
