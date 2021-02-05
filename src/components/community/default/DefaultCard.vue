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
import CommunityCardTitle from '@/components/community/default/DefaultCardTitle.vue';
import CommunityCardAction from '@/components/community/default/DefaultCardAction.vue';
import CommunityCardText from '@/components/community/default/DefaultCardText.vue';

export default {
  name: 'DefaultCard',
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
