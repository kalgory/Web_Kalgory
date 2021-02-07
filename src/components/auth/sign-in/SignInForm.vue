<template>
  <v-form
    ref="form"
    class="mx-12"
    @submit.prevent="signIn"
  >
    <text-field-email
      v-model="email"

      :is-auto-focus="true"
    />
    <text-field-password
      v-model="password"
      tabindex="2"
    />

    <v-btn
      type="submit"
      :loading="isLoading"
      block
      class="mt-4"
      color="primary"
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
    isLoading: false,
    email: '',
    password: '',
  }),

  computed: {
    isValid() {
      return this.$refs.form.validate();
    },
  },

  methods: {
    signIn() {
      if (this.isValid) {
        this.isLoading = true;
        signInWithEmailAndPassword(this.email, this.password)
          // eslint-disable-next-line no-unused-vars
          .then((userCredential) => {
            this.$router.back();
            this.$toasted.show('로그인 완료', {
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
            this.isLoading = false;
          });
      } else {
        this.$toasted.show('유효한 값 입력아', {
          type: 'info',
          icon: 'mdi-account-outline',
        });
      }
    },
  },
};
</script>
