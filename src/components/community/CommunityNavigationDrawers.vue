<template>
  <v-navigation-drawer
    app
    clipped
    flat
  >
    <v-list nav>
      <v-list-item-group
        active-class="deep-purple--text "
      >
        <v-list-item
          to="/community"
          exact
        >
          <v-list-item-title>Default Community</v-list-item-title>
        </v-list-item>

        <v-list-item
          to="/community/information"
        >
          <v-list-item-title>Information</v-list-item-title>
        </v-list-item>

        <v-list-item
          to="/community/question"
        >
          <v-list-item-title>Question And Answer</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'CommunityNavigationDrawers',

  data: () => ({
    drawer: true,
  }),
};
</script>
