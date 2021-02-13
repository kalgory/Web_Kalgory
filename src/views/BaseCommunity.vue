<template>
  <div>
    <community-toolbar />
    <router-view class="pt-15" />
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
