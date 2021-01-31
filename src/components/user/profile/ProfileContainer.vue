<template>
  <div>{{ user }}</div>
</template>
<script>
import { readUser } from '@/plugins/firebase/firestore/user';

export default {
  name: 'ProfileContainer',

  data: () => ({
    user: {},
  }),

  created() {
    readUser(this.$route.params.id)
      .then((user) => {
        this.user = user;
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        // TODO error handler
        console.error(error);
      });
  },
};
</script>
