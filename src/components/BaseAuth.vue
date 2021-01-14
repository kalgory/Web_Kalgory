<template>
  <v-app>
    <v-main class="primary">
      <v-container fluid fill-height>
        <v-row justify="center">
          <v-col cols="10" align-self="center">

            <v-card
              elevation="0"
            >

              <v-container fluid fill-height>
                <v-row align="center" justify="center">

                  <v-col cols="3">
                    <v-img
                      lazy-src="logo-initial-background"
                      src="https://raw.githubusercontent.com/kalgory/Resource/bd2474609713651099e21d296d004442e0ce965e/Logo-Initial-Background.svg?token=AIKWLYDXFS6QGP5TL22RQ5K75HKKE"
                      max-height="50"
                      max-width="50"
                    ></v-img>
                  </v-col>

                  <v-col cols="3">
                    <v-img
                      lazy-src="https://raw.githubusercontent.com/kalgory/Resource/bd2474609713651099e21d296d004442e0ce965e/Logo-Text.svg?token=AIKWLYFN3TG3WKF4EVFJY5K75HKQK"
                      src="https://raw.githubusercontent.com/kalgory/Resource/bd2474609713651099e21d296d004442e0ce965e/Logo-Text.svg?token=AIKWLYFN3TG3WKF4EVFJY5K75HKQK"
                      max-height="50"
                      max-width="250"
                    ></v-img>
                  </v-col>

                </v-row>
              </v-container>

<!--              <v-card-text>-->
<!--                <v-text-field></v-text-field>-->
<!--                <v-text-field></v-text-field>-->
<!--              </v-card-text>-->

<!--              <v-container fluid>-->
<!--                <v-row no-gutters>-->
<!--                  <v-col>-->

<!--                    <v-btn>-->
<!--                      Sign In-->
<!--                    </v-btn>-->

<!--                  </v-col>-->
<!--                </v-row>-->
<!--              </v-container>-->

            </v-card>

          </v-col>

        </v-row>

      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'SignIn',
}
</script>

<style scoped>

</style>