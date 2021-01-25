<template>
  <v-container fill-height>
    <v-row>
      <v-col>
        <CommunityCard community-type="popular questions"></CommunityCard>
      </v-col>
      <v-col>
        <CommunityCard community-type="questions"></CommunityCard>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <CommunityCard community-type="popular information"></CommunityCard>
      </v-col>
      <v-col>
        <CommunityCard community-type="information"></CommunityCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CommunityCard from "@/components/community/CommunityCard";

export default {
  components: {
    CommunityCard,
  },
  name: "BaseCommunityDefault"
}
</script>

<style scoped>

</style>