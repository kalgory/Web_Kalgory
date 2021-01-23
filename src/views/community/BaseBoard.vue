<template>
  <v-container fill-height>
    <v-row>
      <v-col>
        <CommunityCard></CommunityCard>
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
  name: "BaseBoard"
}
</script>

<style scoped>

</style>