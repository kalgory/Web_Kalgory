<template>
  <v-card>
    <v-card-title>
      Sign in
    </v-card-title>
    <v-card-subtitle>
      계속 하려면 아래의 방법중 하나로 인증을 완료 해주세요.
    </v-card-subtitle>
    
    <v-card-text>
      <v-container>
        <v-row justify="center">
          <v-col cols="10">
            <v-text-field
              placeholder="email"
            />
          </v-col>
          
          <v-col cols="10">
            <v-text-field
              placeholder="password"
            >
            
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    
    <v-card-actions>
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="10">
            <v-btn>로그인</v-btn>
          </v-col>
        </v-row>
        <v-row justify="center">

            <v-btn class="col-4">
              칼고리 회원가입
            </v-btn>

        </v-row>
        <v-row>
          <v-col cols="2">
            <v-btn>
              카카오
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn>
              구글
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn>
              페이스북
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'SignIn',
}
</script>

<style scoped>

</style>