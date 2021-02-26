<template>
  <div>
    <common-simple-table target-collection="QUESTION" />
    <v-btn
      fixed
      right
      top
      class="mt-15"
      to="/community/question/create"
    >
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
  </div>
</template>

<script>
import CommonSimpleTable from '@/components/community/common/CommonSimpleTable.vue';

export default {
  name: 'QuestionPosts',
  components: {
    CommonSimpleTable,
  },
};
</script>
