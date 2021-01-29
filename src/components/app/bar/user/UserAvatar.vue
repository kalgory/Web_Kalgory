<template>
  <v-avatar
    color="primary"
    :size="size"
  >
    <v-img
      v-if="isPhotoExist"
      lazy-src="photo"
      src="photo"
    />
    <span
      v-if="!isPhotoExist"
      class="white--text headline"
    >{{ name }}</span>
  </v-avatar>
</template>

<script>
export default {
  name: 'UserAvatar',
  props: {
    size: {
      type: Number,
      default: 48,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
  },

  computed: {
    isPhotoExist() {
      return !!this.photo;
    },
  },

};
</script>
