<template>
  <v-card
      class="mx-auto"
      max-width="800"
  >
    <CommunityCardTitle :community-type="communityType"></CommunityCardTitle>
    <CommunityCardText :community-type="communityType"></CommunityCardText>
    <CommunityCardAction :community-type="communityType"></CommunityCardAction>
  </v-card>
</template>

<script>
import CommunityCardTitle from "@/components/community/CommunityCardTitle";
import CommunityCardAction from "@/components/community/CommunityCardAction";
import CommunityCardText from "@/components/community/CommunityCardText";

export default {
  props: {
    communityType: {
      type: String,
      required: true,
      validator: function (value) {
        return ['popular questions', 'questions', 'popular information', 'information'].indexOf(value) !== -1
      },
    }
  },
  components: {
    CommunityCardTitle,
    CommunityCardAction,
    CommunityCardText,
  },
  name: "CommunityCard"
}
</script>

<style scoped>

</style>