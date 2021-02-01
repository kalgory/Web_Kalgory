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
      if (this.$route.name === 'myProfile') {
        return this.$store.getters.getUser.uid;
      }
      return this.$route.params.uid;
    },
  },

  watch: {
    userUID(value) {
      console.log('userUID is changed');
      this.readUser(value);
    },
  },

  created() {
    console.log(this.$route.name);
    this.readUser(this.userUID);
  },

  methods: {
    readUser(userUID) {
      if (userUID === '') {
        return;
      }
      readUser(userUID)
        .then((user) => {
          this.user = user;
        })
        .catch((error) => {
          // TODO error handler
          console.error(error);
        });
    },
  },
};
</script>
