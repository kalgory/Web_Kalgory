<template>
  <v-container fluid>
    <v-row>
      <v-col cols="auto">
        <user-avatar
          :size="96"
          :name="user.name"
          :photo="user.photo"
        />
      </v-col>
      <v-col
        cols="auto"
        align-self="center"
      >
        <p class="my-auto">
          {{ user.name }}
        </p>
        <p class="my-auto">
          {{ user.email }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import UserAvatar from '@/components/app/bar/user/UserAvatar.vue';
import { readUserByUID } from '@/plugins/firebase/firestore/user';

export default {
  name: 'ProfileContainer',

  components: {
    UserAvatar,
  },

  data: () => ({
    user: {},
  }),

  computed: {
    userUID() {
      if (this.$route.name === 'myProfile') {
        return this.$store.getters.getUser.uid;
      }
      return this.$route.params.uid;
    },
  },

  watch: {
    userUID(value) {
      this.readUser(value);
    },
  },

  created() {
    this.readUser(this.userUID);
  },

  methods: {
    readUser(userUID) {
      readUserByUID(userUID)
        .then((documentSnapshot) => {
          this.user = documentSnapshot.data();
        })
        .catch((error) => {
          this.$toasted.global.error({ message: error.message });
        });
    },
  },
};
</script>
