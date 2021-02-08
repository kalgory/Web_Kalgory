<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="3">
        <v-btn
          block
          icon
          plain
          @click="signInWithGoogle"
        >
          <v-img
            :src="require('@/assets/btn-google-light-normal.svg')"
          />
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { signInWithGoogle } from '@/plugins/firebase/auth';

export default {
  name: 'SocialContainer',

  methods: {
    signInWithGoogle() {
      signInWithGoogle()
        .then(() => {
          this.$toasted.show('로그인 완료', {
            type: 'success',
            icon: 'mdi-account-outline',
          });
          this.$router.back();
        })
        .catch((error) => {
          this.$toasted.show(error.message, {
            type: 'error',
            icon: 'mdi-account-outline',
          });
        });
    },
  },
};
</script>

<style scoped>

</style>
