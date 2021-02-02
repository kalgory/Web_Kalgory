<template>
  <div>
    <div class="d-flex align-center text-center justify-center">
      <v-avatar
        :color="isIntersecting ? 'green lighten-1' : 'red darken-2'"
        class="mr-3 swing-transition"
        size="32"
      />
    </div>

    <v-responsive
      class="overflow-y-auto"
      max-height="400"
    >
      <v-responsive
        height="200vh"
        class="d-flex align-center text-center pa-2"
      >
        <v-card
          v-for="item in 3"
          :key="item"
          v-intersect="onIntersect"
          class="mx-auto"
          max-width="336"
        >
          <v-card-title>Card title</v-card-title>

          <v-card-text>
            ??
          </v-card-text>
        </v-card>
      </v-responsive>
    </v-responsive>
  </div>
</template>

<script>
export default {
  data: () => ({
    isIntersecting: false,
  }),

  methods: {
    onIntersect(entries) {
      // More information about these options
      // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      this.isIntersecting = entries[0].isIntersecting;
    },
  },
};
</script>
