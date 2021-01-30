<template>
  <v-btn
    v-if="isAuth"
    @click="pushCreatePost"
  >
    post 생성
  </v-btn>
</template>

<script>
export default {
  name: 'PostsBtn',
  computed: {
    isAuth() {
      if (!this.$store.getters.getIsLoading && this.$store.getters.getIsAuth) return true;
      return false;
    },
  },
  methods: {
    pushCreatePost() {
      this.$router.push('/community/question/create');
    },
  },
};
</script>

<style scoped>

</style>
