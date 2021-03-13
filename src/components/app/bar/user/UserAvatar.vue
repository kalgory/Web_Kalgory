<template>
  <v-avatar
    color="primary"
    :size="size"
  >
    <v-progress-circular
      v-if="isLoading"
      indeterminate
      color="white"
    />
    <v-img
      v-if="isPhotoExist && !isLoading"
      :lazy-src="photo"
      :src="photo"
    />
    <span
      v-if="!isPhotoExist && !isLoading"
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
    isLoading: {
      type: Boolean,
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
