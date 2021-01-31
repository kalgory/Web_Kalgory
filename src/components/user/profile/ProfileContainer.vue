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
      if (this.$route.params.uid !== 'me') {
        return this.$route.params.uid;
      }
      if (this.$store.getters.getIsLoading) {
        this.$router.back();
        return '';
      } if (!this.$store.getters.getIsAuth) {
        this.$router.back();
        return '';
        // TODO need auth
      }
      return this.$store.getters.getUser.uid;
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
      if (userUID === '') {
        return;
      }
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
