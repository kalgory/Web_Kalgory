<template>
  <v-card
    class="mx-auto"
    max-width="800"
    min-width="400"
  >
    <CommunityCardTitle :community-type="communityType" />
    <CommunityCardText :community-type="communityType" />
    <CommunityCardAction :community-type="communityType" />
  </v-card>
</template>

<script>
import CommunityCardTitle from '@/components/community/CommunityCardTitle';
import CommunityCardAction from '@/components/community/CommunityCardAction';
import CommunityCardText from '@/components/community/CommunityCardText';

export default {
  name: 'CommunityCard',
  components: {
    CommunityCardTitle,
    CommunityCardAction,
    CommunityCardText,
  },
  props: {
    communityType: {
      type: String,
      required: true,
      validator(value) {
        return ['popular questions', 'questions', 'popular information', 'information'].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style scoped>

</style>
