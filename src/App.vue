<script>
import AppHeader from './components/AppHeader.vue';
import AppLoader from './components/AppLoader.vue';
import { store } from './data/store.js';
const endpoint = 'http://localhost:8000/api/words/';

export default {
  name: 'Glossario',
  components: { AppHeader, AppLoader },
  data: () => ({
    store
  }),

}
</script>

<template>
  <AppHeader />
  <RouterView />
  <AppLoader v-if="store.isLoading" />
</template>

<style lang='scss' scoped></style>