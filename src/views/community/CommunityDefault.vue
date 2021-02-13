<template>
  <v-container fill-height>
    <v-row class="pt-3">
      <v-col>
        <default-card
          v-for="(cardType,index) in cardList"
          :key="index"
          :community-type="cardType"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DefaultCard from '@/components/community/default/DefaultCard.vue';

export default {
  name: 'BaseCommunityDefault',
  components: {
    DefaultCard,
  },
  data: () => ({
    cardList: ['popular information', 'popular questions', 'information', 'questions'],
  }),
  created() {
    for (let i = 0; i < this.cardList.length; i += 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const x = this.cardList[i];
      this.cardList[i] = this.cardList[j];
      this.cardList[j] = x;
    }
  },

};
</script>

<style scoped>

</style>
