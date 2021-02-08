<template>
  <v-card-title>
    <v-container>
      <v-row justify="center">
        <v-col cols="auto">
          <v-btn
            to="/"
            icon
          >
            <initial-logo />
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="auto">
          <p class="font-weight-bold">
            <slot />
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-card-title>
</template>

<script>
import InitialLogo from '@/assets/InitialLogo.vue';

export default {
  name: 'AuthCardTitle',

  components: {
    InitialLogo,
  },
};
</script>
