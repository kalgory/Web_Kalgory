<template>
  <v-form
    ref="form"
    class="mx-12"
    @submit.prevent="signUp"
  >
    <name-text-field
      v-model="name"
      :is-auto-focus="true"
      hint="2자 이상의 이름을 입력해주세요"
      :tab-index="1"
    />
    <email-text-field
      v-model="email"
      :tab-index="2"
    />
    <password-text-field
      v-model="password"
      :hint="isPasswordMatching?'':'8자 이상 영문 소문자와 숫자 조합입니다'"
      :tab-index="3"
      :is-success="isPasswordMatching"
      @input="onPasswordInput"
      @blur="onPasswordBlur"
    />
    <password-text-field
      v-model="confirmPassword"
      label="Password Confirm"
      :hint="isPasswordMatching?'':'위와 동일한 비밀번호를 입력해주세요'"
      :tab-index="4"
      :is-success="isPasswordMatching"
      :error-message="confirmPasswordErrorMessage"
      @input="onPasswordInput"
      @blur="onPasswordBlur"
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
import NameTextField from '@/components/auth/form/name/NameTextField.vue';
import EmailTextField from '@/components/auth/form/email/EmailTextField.vue';
import PasswordTextField from '@/components/auth/form/password/PasswordTextField.vue';
import { createUserWithEmailAndPassword, updateProfile } from '@/plugins/firebase/auth';

export default {
  name: 'SignUpForm',

  components: {
    NameTextField,
    EmailTextField,
    PasswordTextField,
  },

  data: () => ({
    confirmPasswordErrorMessage: '',
    isLoading: false,
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }),

  computed: {
    isPasswordMatching() {
      if (!this.confirmPassword || !this.password) {
        return false;
      }
      if (this.confirmPassword.length < 6 || this.password.length < 6) {
        return false;
      }
      return this.confirmPassword === this.password;
    },
    isValid() {
      return this.$refs.form.validate();
    },
  },

  methods: {
    onPasswordInput() {
      this.confirmPasswordErrorMessage = '';
    },
    onPasswordBlur() {
      if (!this.confirmPassword || !this.password) {
        this.confirmPasswordErrorMessage = '';
      } else if (this.confirmPassword.length < 6 || this.password.length < 6) {
        this.confirmPasswordErrorMessage = '';
      } else if (this.isPasswordMatching) {
        this.confirmPasswordErrorMessage = '';
      } else {
        this.confirmPasswordErrorMessage = '일치하지 않습니다.';
      }
    },
    signUp() {
      this.onPasswordBlur();
      if (this.isValid && this.isPasswordMatching) {
        this.$emit('ondStartLoad');
        this.isLoading = true;
        createUserWithEmailAndPassword(this.email, this.password)
        // eslint-disable-next-line no-unused-vars
          .then((userCredential) => updateProfile({ displayName: this.name }))
          .then(() => {
            this.$toasted.global.success({ message: '회원가입 완료' });
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
