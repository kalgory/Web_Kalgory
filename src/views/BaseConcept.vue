<template>
  <v-container class="pa-4 text-center">
    <v-row
      class="fill-height"
      align="center"
      justify="center"
    >
      <v-hover v-slot="{ hover }">
        <v-card
          :elevation="hover ? 12 : 2"
        >
          <v-img
            :src="item.img"
            height="225px"
          >
            <v-card-title class="title white--text">
              <v-row
                class="fill-height flex-column"
                justify="space-between"
              >
                <p class="mt-4 subheading text-left">
                  {{ item.title }}
                </p>
              </v-row>
            </v-card-title>
          </v-img>
        </v-card>
      </v-hover>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    icons: ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'],
    item: [
      {
        title: 'New Releases',
        text: 'It\'s New Release Friday',
        subtext: 'Newly released songs. Updated daily.',
        img: 'http://lorempixel.com/output/nightlife-q-c-640-480-5.jpg',
      },

    ],
    transparent: 'rgba(255, 255, 255, 0)',
  }),
};
</script>

<style scoped>
</style>
