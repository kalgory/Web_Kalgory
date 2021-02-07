<template>
  <div>
    <community-toolbar />
    <router-view />
  </div>
</template>

<script>
import CommunityToolbar from '@/components/community/CommunityToolbar.vue';

export default {
  name: 'BaseCommunity',
  components: {
    CommunityToolbar,
  },
};
</script>

<style scoped>

</style>
