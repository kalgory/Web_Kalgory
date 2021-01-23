<template>
  <v-card
      class="mx-auto"
      max-width="800"
  >
    <CommunityCardTitle></CommunityCardTitle>
    <CommunityCardAction></CommunityCardAction>
  </v-card>
</template>

<script>
import CommunityCardTitle from "@/components/community/CommunityCardTitle";
import CommunityCardAction from "@/components/community/CommunityCardAction";

export default {
  components: {
    CommunityCardTitle,
    CommunityCardAction,
  },
  name: "CommunityCard"
}
</script>

<style scoped>

</style>