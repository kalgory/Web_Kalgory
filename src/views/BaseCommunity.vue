<template>
  <div>
    <community-navigation-drawers />
    <router-view class="pt-15" />
  </div>
</template>

<script>
import CommunityNavigationDrawers from '@/components/community/CommunityNavigationDrawers.vue';

export default {
  name: 'BaseCommunity',
  components: {
    CommunityNavigationDrawers,
  },
};
</script>

<style scoped>

</style>
