<template>
  <div>
    <community-navigation-drawer />
    <router-view />
  </div>
</template>

<script>
import CommunityNavigationDrawer from '@/components/community/CommunityNavigationDrawer.vue';

export default {
  name: 'BaseCommunity',
  components: {
    CommunityNavigationDrawer,
  },
};
</script>

<style scoped>

</style>
