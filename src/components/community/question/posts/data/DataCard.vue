<template>
  <v-card>
    <v-card-title class="font-weight-bold">
      {{ post.header }}
    </v-card-title>
    <v-card-subtitle>
      {{ post.createdAt }}
    </v-card-subtitle>
    <v-card-text
      class="font-weight-bold"
      v-text="getProcessedBody()"
    />
    <v-card-actions>
      <v-row>
        <v-col offset="11">
          <v-btn
            icon
            @click="isExpand=!isExpand"
          >
            <v-icon v-if="isExpand">
              mdi-chevron-up
            </v-icon>
            <v-icon v-if="!isExpand">
              mdi-chevron-down
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'DataCard',

  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    isExpand: false,
  }),

  methods: {
    getProcessedBody() {
      if (this.post.body.length >= 300 && this.isExpand === false) {
        return `${this.post.body.substr(0, 300)}...`;
      }
      return this.post.body;
    },
  },
};
</script>

<style scoped>

</style>
