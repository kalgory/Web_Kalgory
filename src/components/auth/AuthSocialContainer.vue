<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="4">
        <v-btn
          @click="signInWithGoogle"
          block
        >
          Google
        </v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn
          @click="signInWithFaceBook"
          block
        >
          Facebook
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { signInWithGoogle, signInWithFaceBook } from '@/firebase/auth'

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