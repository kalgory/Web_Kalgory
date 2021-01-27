<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="4">
        <v-btn
          block
          @click="signInWithGoogle"
        >
          Google
        </v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn
          block
          @click="signInWithFaceBook"
        >
          Facebook
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { signInWithGoogle, signInWithFaceBook } from '@/plugins/firebase/auth'

export default {
  name: 'AuthSocialContainer',
  
  methods: {
    signInWithGoogle () {
      signInWithGoogle()
        .then(() => {
        })
        .catch(() => {
        })
    },
    signInWithFaceBook () {
      signInWithFaceBook()
    },
  },
}
</script>

<style scoped>

</style>