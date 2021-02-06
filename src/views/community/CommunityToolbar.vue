<template>
  <v-toolbar class="elevation-0">
    <v-spacer />
    <v-btn
      :disabled="this.$route.name.indexOf('information')!==-1"
      to="/community/information"
      exact
    >
      <v-icon>
        mdi-information
      </v-icon>
    </v-btn>
    <v-btn
      :disabled="this.$route.name.indexOf('default')!==-1"
      to="/community"
      exact
    >
      <v-icon>
        mdi-home
      </v-icon>
    </v-btn>
    <v-btn
      :disabled="this.$route.name.indexOf('question')!==-1"
      to="/community/question"
      exact
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
