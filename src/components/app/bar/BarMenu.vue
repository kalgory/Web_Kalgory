<template>
  <v-menu
    min-width="324px"
  >
    <template #activator="{ on }">
      <v-btn
        icon
        v-on="on"
      >
        <user-avatar
          :is-loading="isLoading"
          :name="name"
          :photo="photo"
        />
      </v-btn>
    </template>
    <v-card>
      <v-container>
        <v-row
          justify="center"
          no-gutters
        >
          <v-col cols="auto">
            <user-avatar
              :is-loading="isLoading"
              :name="name"
              :photo="photo"
              :size="72"
              class="mt-4 mb-2"
            />
          </v-col>
        </v-row>
        <v-row
          justify="center"
          no-gutters
        >
          <v-col cols="auto">
            <p class="title">
              {{ name }}
            </p>
          </v-col>
        </v-row>
        <v-row
          justify="center"
          class="mt-n6"
        >
          <v-col cols="auto">
            <p class="caption">
              {{ email }}
            </p>
          </v-col>
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
import { readUserByUID } from '@/plugins/firebase/firestore/user';
import { signOut } from '@/plugins/firebase/auth';
import UserAvatar from './user/UserAvatar.vue';

export default {
  name: 'BarMenu',

  components: {
    UserAvatar,
  },

  data: () => ({
    isLoading: true,
    name: '',
    email: '',
    photo: '',
  }),

  computed: {
    userUID() {
      return this.$store.getters.getUserUID;
    },
    isAuthenticated() {
      return this.$store.getters.getIsAuthenticated;
    },
  },

  watch: {
    isAuthenticated(value) {
      if (value) {
        this.readUser();
      }
    },
  },

  methods: {
    readUser() {
      console.log('test');
      readUserByUID(this.userUID)
        .then((documentSnapshot) => {
          this.name = documentSnapshot.data().name;
          this.email = documentSnapshot.data().email;
          this.photo = documentSnapshot.data().photo;
        })
        .catch((error) => {
          this.$toasted.global.error({ message: error.message });
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    signOut() {
      this.$store.commit('setIsAuthLoading', true);
      signOut()
        .then(() => {
          this.$toasted.global.success({ message: '로그아웃 완료' });
        })
        .catch((error) => {
          this.$toasted.global.error({ message: error.message });
        })
        .finally(() => {
          this.$store.commit('setIsAuthLoading', false);
        });
    },
  },
};
</script>
