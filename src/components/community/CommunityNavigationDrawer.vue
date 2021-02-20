<template>
  <v-navigation-drawer
    app
    clipped
    flat
  >
    <v-list nav>
      <v-list-item
        v-for="(item,index) in communityListItems"
        :key="index"
        :to="item.path"
        :exact="item.exact"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'CommunityNavigationDrawer',

  data: () => ({
    drawer: true,
    communityListItems: [
      {
        icon: 'mdi-home', title: 'Default Community', path: '/community', exact: true,
      },
      { icon: 'mdi-frequently-asked-questions', title: 'Question And Answer', path: '/community/question' },
      { icon: 'mdi-information-outline', title: 'Information', path: '/community/information' },
    ],
  }),
};
</script>
