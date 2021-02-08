<template>
  <v-form
    ref="form"
    class="mx-12"
    @submit.prevent="signIn"
  >
    <email-text-field
      v-model="email"
      :tab-index="1"
      :is-auto-focus="true"
    />
    <password-text-field
      v-model="password"
      :tab-index="2"
    />

    <v-btn
      tabindex="3"
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
import EmailTextField from '@/components/auth/form/email/EmailTextField.vue';
import PasswordTextField from '@/components/auth/form/password/PasswordTextField.vue';
import { signInWithEmailAndPassword } from '@/plugins/firebase/auth';

export default {
  name: 'SignInForm',

  components: {
    EmailTextField,
    PasswordTextField,
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
        this.$emit('ondStartLoad');
        this.isLoading = true;
        signInWithEmailAndPassword(this.email, this.password)
          // eslint-disable-next-line no-unused-vars
          .then((userCredential) => {
            this.$router.back();
          })
          .catch((error) => {
            this.$toasted.global.error({ message: error.message });
          })
          .finally(() => {
            this.$emit('onEndLoad');
            this.isLoading = false;
          });
      } else {
        this.$toasted.global.error({ message: '입력이 유효하지 않습니다.' });
      }
    },
  },
};
</script>
