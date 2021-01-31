<template>
  <div>{{ userUID }} {{ user }}</div>
</template>
<script>
import { readUser } from '@/plugins/firebase/firestore/user';

export default {
  name: 'ProfileContainer',

  data: () => ({
    user: {},
  }),

  computed: {
    userUID() {
      if (this.$route.params.uid === 'me') {
        if (this.$store.getters.getIsLoading) {
          this.$router.back();
        } else if (!this.$store.getters.getIsAuth) {
          this.$router.back();
          // TODO need auth
        } else {
          return this.$store.getters.getUser.uid;
        }
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
      readUser(userUID)
        .then((user) => {
          // console.log(user);
          this.user = user;
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          // TODO error handler
          console.error(error);
        });
    },
  },
};
</script>
