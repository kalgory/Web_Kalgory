<template>
  <v-menu
    bottom
    min-width="324px"
    rounded
    offset-y
  >
    <template #activator="{ on }">
      <v-btn
        icon
        v-on="on"
      >
        <user-avatar
          :name="!!name ? name : ''"
          :photo="!!photo? photo : ''"
        />
      </v-btn>
    </template>

    <v-card>
      <v-container>
        <v-row justify="center">
          <user-avatar
            :name="!!name ? name : ''"
            :photo="!!photo? photo : ''"
            :size="72"
            class="mt-4 mb-2"
          />
        </v-row>

        <v-row
          justify="center"
          class="title"
        >
          <p>{{ name }}</p>
        </v-row>

        <v-row
          justify="center"
          class="mt-n4"
        >
          <p class="caption">
            {{ email }}
          </p>
        </v-row>
      </v-container>

      <v-divider class="my-0" />
      <v-btn
        block
        text
        class="py-8"
        to="/user"
      >
        Profile
      </v-btn>
      <v-divider class="my-0" />
      <v-btn
        block
        text
        class="py-8"
        @click="signOut"
      >
        Sign out
      </v-btn>
    </v-card>
  </v-menu>
</template>

<script>
import { signOut } from '@/plugins/firebase/auth';
import UserAvatar from './user/UserAvatar.vue';

export default {
  name: 'BarUser',

  components: {
    UserAvatar,
  },

  computed: {
    localUser() {
      return JSON.parse(localStorage.getItem('user'));
    },
    name() {
      if (this.$store.getters.getIsLoading) {
        return this.localUser.displayName;
      }
      return this.$store.getters.getUser.displayName;
    },
    email() {
      if (this.$store.getters.getIsLoading) {
        return this.localUser.email;
      }
      return this.$store.getters.getUser.email;
    },
    photo() {
      if (this.$store.getters.getIsLoading) {
        return this.localUser.photoURL;
      }
      return this.$store.getters.getUser.photoURL;
    },
  },

  methods: {
    signOut() {
      signOut()
        .then(() => {
          this.$router.push('/');
        })
        .catch((error) => {
          console.warn(error);
        });
    },
  },
};
</script>
