<template>
  <div>
    <div
      v-once
      class="text-h4 text-center font-weight-black pb-6 pt-2"
    >
      {{ communityType }}
    </div>
  </div>
</template>

<script>
export default {
name: "CommunityCardTitle",
  props: {
    communityType: {
      type: String,
      required: true,
      validator: function (value) {
        return ['popular questions', 'questions', 'popular information', 'information'].indexOf(value) !== -1
      },
    }
  },

}
</script>

<style scoped>

</style>