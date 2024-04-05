<script>
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/words/';
export default {
  name: 'Glossario',
  data: () => ({
    words: []
  }),

  methods: {
    fetchWords() {
      axios.get(endpoint).then(res => {
        console.log(res.data);

        this.words = res.data;
      })
    }
  },
  created() {
    this.fetchWords();
  }
}
</script>

<template>
  <RouterView />
</template>

<style lang='scss' scoped>
/* style here */
</style>