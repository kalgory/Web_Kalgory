<template>
  <v-avatar
    color="primary"
    :size="size"
  >
    <v-img
      v-if="isPhotoExist"
      :lazy-src="photo"
      :src="photo"
    />
    <span
      v-if="!isPhotoExist"
      class="white--text"
      :style="{'font-size': size * 0.6 + 'px'}"
    >
      {{ name.charAt(0).toUpperCase() }}
    </span>
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
      default: '',
      required: false,
    },
    photo: {
      type: String,
      default: '',
      required: false,
    },
  },

  computed: {
    isPhotoExist() {
      return !!this.photo;
    },
  },
};
</script>
