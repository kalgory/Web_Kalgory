<template>
  <v-form
    ref="form"
    class="mx-12"
    @submit.prevent="signUp"
  >
    <text-field-name
      v-model="name"
      :is-auto-focus="true"
      hint="2글자 이상을 입력해줘"
      :tab-index="1"
    />
    <text-field-email
      v-model="email"
      :tab-index="2"
    />
    <text-field-password
      v-model="password"
      :tab-index="3"
    />
    <text-field-password
      v-model="confirmPassword"
      :tab-index="4"
    />

    <v-btn
      tabindex="5"
      type="submit"
      :loading="isLoading"
      block
      class="mt-4"
      color="primary"
    >
      Sign Up
    </v-btn>
  </v-form>
</template>

<script>
import TextFieldName from '@/components/auth/text-field/TextFieldName.vue';
import TextFieldEmail from '@/components/auth/text-field/TextFieldEmail.vue';
import TextFieldPassword from '@/components/auth/text-field/TextFieldPassword.vue';
import { createUserWithEmailAndPassword, updateProfile } from '@/plugins/firebase/auth';

export default {
  name: 'SignUpForm',

  components: {
    TextFieldName,
    TextFieldEmail,
    TextFieldPassword,
  },

  data: () => ({
    isLoading: false,
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }),

  computed: {
    isValid() {
      return this.$refs.form.validate();
    },
  },

  methods: {
    signUp() {
      if (this.isValid) {
        this.isLoading = true;
        createUserWithEmailAndPassword(this.email, this.password)
          // eslint-disable-next-line no-unused-vars
          .then((userCredential) => updateProfile({ displayName: this.name }))
          .then(() => {
            this.$toasted.show('회원가입 완료', {
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
          })
          .finally(() => {
            this.isLoading = false;
          });
      } else {
        this.$toasted.show('유', {
          type: 'info',
          icon: 'mdi-account-outline',
        });
      }
    },
  },
};
</script>
