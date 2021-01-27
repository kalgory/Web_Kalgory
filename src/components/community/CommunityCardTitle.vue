<template>
  <div>
    <div
      v-once
      class="text-h4 text-center font-weight-black pb-6 pt-2"
    >
      {{ currentTypeString }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommunityCardTitle',
  props: {
    communityType: {
      type: String,
      required: true,
      validator(value) {
        return ['popular questions', 'questions', 'popular information', 'information'].indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {
      currentTypeString: '',
    };
  },
  created() {
    if (this.communityType === 'popular questions') this.currentTypeString = '실시간 인기 질문글';
    else if (this.communityType === 'questions') this.currentTypeString = '최신 질문글';
    else if (this.communityType === 'popular information') this.currentTypeString = '실시간 인기 정보글';
    else this.currentTypeString = '최신 정보글';
  },

};
</script>

<style scoped>

</style>
