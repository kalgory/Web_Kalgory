<template>
  <v-container fill-height>
    <v-row>
      <v-col>
        <CommunityCard community-type="popular questions" />
      </v-col>
      <v-col>
        <CommunityCard community-type="questions" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <CommunityCard community-type="popular information" />
      </v-col>
      <v-col>
        <CommunityCard community-type="information" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CommunityCard from '@/components/community/CommunityCard';

export default {
  name: 'BaseCommunityDefault',
  components: {
    CommunityCard,
  },
};
</script>

<style scoped>

</style>
