<template>
  <v-form
    class="mx-12"
  >
    <text-field-email
      v-model="email"
    />

    <text-field-password
      v-model="password"
    />

    <v-btn
      block
      class="my-3"
      color="primary"
      @click="signIn"
    >
      Sign in
    </v-btn>
  </v-form>
</template>

<script>
import TextFieldEmail from '@/components/auth/text-field/TextFieldEmail.vue';
import TextFieldPassword from '@/components/auth/text-field/TextFieldPassword.vue';
import { signInWithEmailAndPassword } from '@/plugins/firebase/auth';

export default {
  name: 'SignInForm',

  components: {
    TextFieldEmail,
    TextFieldPassword,
  },

  data: () => ({
    email: '',
    password: '',
  }),

  methods: {
    signIn() {
      this.$store.commit('setIsAuthLoading', true);
      signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$toasted.show('로그인 완료', {
            type: 'success',
            icon: 'mdi-account-outline',
          });
          this.$router.back();
        })
        // eslint-disable-next-line no-unused-vars
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
