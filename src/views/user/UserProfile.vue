<template>
  <profile-container />
</template>
<script>
import ProfileContainer from '@/components/user/profile/ProfileContainer.vue';

export default {
  name: 'BaseUser',

  components: {
    ProfileContainer,
  },
};
</script>
