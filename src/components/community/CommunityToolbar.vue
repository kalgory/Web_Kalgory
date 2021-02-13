<template>
  <v-toolbar
    class="elevation-0"
    style="margin:0; position:fixed; left: 0; right: 0; z-index: inherit"
  >
    <v-spacer />
    <v-btn
      to="/community/information"
    >
      <v-icon>
        mdi-information
      </v-icon>
    </v-btn>
    <v-btn
      to="/community"
      exact
    >
      <v-icon>
        mdi-home
      </v-icon>
    </v-btn>
    <v-btn
      to="/community/question"
    >
      <v-icon>
        mdi-frequently-asked-questions
      </v-icon>
    </v-btn>
    <v-spacer />
  </v-toolbar>
</template>

<script>
export default {
  name: 'CommunityToolbar',
};
</script>
