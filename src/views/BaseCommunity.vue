<template>
  <v-container>
    <CommunityCard></CommunityCard>
    <router-view></router-view>
  </v-container>
</template>

<script>
import CommunityCard from "@/components/community/CommunityCard";
export default {
  components: {
    CommunityCard,
  },
  name: 'BaseCommunity',
}
</script>

<style scoped>

</style>