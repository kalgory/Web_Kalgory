<template>
  <v-card
    :loading="isLoading"
    width="400"
  >
    <auth-card-title :is-button-disabled="true">
      계속 하려면 이메일을 인증해주세요.
    </auth-card-title>

    <v-card-actions>
      <v-btn
        @click="signOut"
      >
        sign out
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import AuthCardTitle from '@/components/auth/AuthCardTitle.vue';
import { signOut } from '@/plugins/firebase/auth';

export default {
  name: 'VerifyCard',

  components: {
    AuthCardTitle,
  },

  data: () => ({
    isLoading: false,
  }),

  methods: {
    signOut() {
      this.$store.commit('setIsAuthLoading', true);
      signOut()
        .then(() => {
          this.$toasted.show('로그아웃 완료', {
            type: 'success',
            icon: 'mdi-account-outline',
          });
        })
        .catch((error) => {
          this.$toasted.show(error.message, {
            type: 'error',
            icon: 'mdi-account-outline',
          });
        })
        .finally(() => {
          this.$store.commit('setIsAuthLoading', false);
        });
    },
  },
};
</script>
