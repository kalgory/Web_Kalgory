<template>
  <v-form
    ref="form"
    class="mx-12"
    @submit.prevent="submit"
  >
    <name-text-field
      v-model="name"
      hint="2자 이상의 이름을 입력해주세요"
      :tab-index="1"
      :is-focus="isNameTextFieldFocus"
      :is-validate-on-blur="isNameTextFieldValidateOnBlur"
      @input="isNameTextFieldValidateOnBlur=true"
      @blur="isNameTextFieldFocus=false"
      @focus="isNameTextFieldFocus=true"
      @error="onNameTextFieldError"
    />
    <email-text-field
      v-model="email"
      :tab-index="2"
      :is-focus="isEmailTextFieldFocus"
      :is-validate-on-blur="isEmailTextFieldValidateOnBlur"
      @input="isEmailTextFieldValidateOnBlur=true"
      @blur="isEmailTextFieldFocus=false"
      @focus="isEmailTextFieldFocus=true"
      @error="onEmailTextFieldError"
    />
    <password-text-field
      v-model="password"
      :hint="isPasswordMatching?'':'8자 이상 영문 소문자와 숫자 조합입니다'"
      :tab-index="3"
      :is-success="isPasswordMatching"
      :is-focus="isPasswordTextFieldFocus"
      :is-validate-on-blur="isPasswordTextFieldValidateOnBlur"
      @input="isPasswordTextFieldValidateOnBlur=true"
      @blur="onPasswordTextFieldBlur"
      @focus="onPasswordTextFieldFocus"
      @error="onPasswordTextFieldError"
    />
    <password-text-field
      v-model="confirmPassword"
      label="Password Confirm"
      :hint="isPasswordMatching?'':'위와 동일한 비밀번호를 입력해주세요'"
      :tab-index="4"
      :is-success="isPasswordMatching"
      :error-message="confirmPasswordErrorMessage"
      :is-focus="isConfirmPasswordTextFieldFocus"
      :is-validate-on-blur="isConfirmPasswordTextFieldFocus"
      @input="isConfirmPasswordTextFieldFocus=true"
      @blur="onConfirmPasswordTextFieldBlur"
      @focus="onConfirmPasswordTextFieldFocus"
      @error="onConfirmPasswordTextFieldError"
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
    isNameValid: false,
    isEmailValid: false,
    isPasswordValid: false,
    isConfirmPasswordValid: false,
    isNameTextFieldFocus: false,
    isEmailTextFieldFocus: false,
    isPasswordTextFieldFocus: false,
    isConfirmPasswordTextFieldFocus: false,
    isNameTextFieldValidateOnBlur: true,
    isEmailTextFieldValidateOnBlur: true,
    isPasswordTextFieldValidateOnBlur: true,
    isConfirmPasswordTextFieldValidateOnBlur: true,
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
      return this.$refs.form.validate() && this.isPasswordMatching;
    },
  },

  mounted() {
    this.isNameTextFieldFocus = true;
  },

  methods: {
    onNameTextFieldError(value) {
      this.isNameValid = !value;
    },
    onEmailTextFieldError(value) {
      this.isEmailValid = !value;
    },
    onPasswordTextFieldBlur() {
      this.processConfirmPasswordErrorMessage();
      this.isPasswordTextFieldFocus = false;
    },
    onPasswordTextFieldFocus() {
      this.confirmPasswordErrorMessage = '';
      this.isPasswordTextFieldFocus = true;
    },
    onPasswordTextFieldError(value) {
      this.isPasswordValid = !value;
    },
    onConfirmPasswordTextFieldBlur() {
      this.processConfirmPasswordErrorMessage();
      this.isConfirmPasswordTextFieldFocus = false;
    },
    onConfirmPasswordTextFieldFocus() {
      this.confirmPasswordErrorMessage = '';
      this.isConfirmPasswordTextFieldFocus = true;
    },
    onConfirmPasswordTextFieldError(value) {
      this.isConfirmPasswordValid = !value;
    },
    processConfirmPasswordErrorMessage() {
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
    submit() {
      this.isNameTextFieldValidateOnBlur = false;
      this.isEmailTextFieldValidateOnBlur = false;
      this.isPasswordTextFieldValidateOnBlur = false;
      this.isConfirmPasswordTextFieldFocus = false;
      this.processConfirmPasswordErrorMessage();
      if (this.isValid) {
        this.$emit('ondStartLoad');
        this.isLoading = true;
        createUserWithEmailAndPassword(this.email, this.password)
        // eslint-disable-next-line no-unused-vars
          .then((userCredential) => updateProfile({ displayName: this.name }))
          .then(() => {
            this.$toasted.global.success({ message: '회원가입 완료' });
          })
          .catch((error) => {
            this.$toasted.global.error({ message: error.message });
          })
          .finally(() => {
            this.$emit('onEndLoad');
            this.isLoading = false;
          });
      } else if (!this.isNameValid) {
        this.isNameTextFieldFocus = true;
        this.$toasted.global.error({ message: '이름이 유효하지 않습니다.' });
      } else if (!this.isEmailValid) {
        this.isEmailTextFieldFocus = true;
        this.$toasted.global.error({ message: '이메일이 유효하지 않습니다.' });
      } else if (!this.isPasswordValid) {
        this.isPasswordTextFieldFocus = true;
        this.$toasted.global.error({ message: '비밀번호가 유효하지 않습니다.' });
      } else if (!this.isConfirmPasswordValid) {
        this.isConfirmPasswordTextFieldFocus = true;
        this.$toasted.global.error({ message: '비밀번호 확인 유효하지 않습니다.' });
      } else {
        this.$toasted.global.error();
      }
    },
  },
};
</script>
