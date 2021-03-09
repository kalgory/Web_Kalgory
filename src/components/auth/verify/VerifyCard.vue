<template>
  <v-card
    :loading="isLoading"
    width="500"
  >
    <auth-card-title :is-button-disabled="true">
      이메일을 인증해주세요.
    </auth-card-title>
    <v-card-text>
      인증 정보가 담긴 메일을 {{ email }} 로 전송했습니다. {{ isVerified }}
    </v-card-text>
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
import { signOut, sendEmailVerification, getCurrentUser } from '@/plugins/firebase/auth';

export default {
  name: 'VerifyCard',

  components: {
    AuthCardTitle,
  },

  data: () => ({
    isLoading: false,
  }),

  computed: {
    email() {
      return this.$store.getters.getUser.email;
    },
    isVerified() {
      return getCurrentUser.emailVerified;
    },
  },

  created() {
    this.sendEmailVerification();
  },

  methods: {
    sendEmailVerification() {
      sendEmailVerification()
        .then(() => {
          console.log('success');
        }).catch((error) => {
          console.error(error);
          this.$toasted.global.error({ message: error.message });
        });
    },
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
