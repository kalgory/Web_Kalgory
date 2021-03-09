<template>
  <v-container>
    <v-row>
      <v-col>
        <default-data-iterator />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import DefaultDataIterator from '@/components/problem/default/DefaultDataIterator.vue';

export default {
  name: 'BaseProblem',

  components: {
    DefaultDataIterator,
  },
};
</script>
