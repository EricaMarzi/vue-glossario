<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'Glossario',
  components: { AppHeader },

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