<template>
  <v-card
    class="mx-auto"
    max-width="800"
    min-width="400"
  >
    <community-card-title :community-type="communityType" />
    <community-card-text :community-type="communityType" />
    <community-card-action :community-type="communityType" />
  </v-card>
</template>

<script>
import CommunityCardTitle from '@/components/community/CommunityCardTitle.vue';
import CommunityCardAction from '@/components/community/CommunityCardAction.vue';
import CommunityCardText from '@/components/community/CommunityCardText.vue';

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
