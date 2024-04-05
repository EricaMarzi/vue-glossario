<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
const endpoint = 'http://localhost:8000/api/words/';

export default {
  name: 'Glossario',
  components: { AppHeader },
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
  <AppHeader />

  <main class="container mt-5">
    <RouterView />
  </main>
</template>

<style lang='scss' scoped>
/* style here */
</style>