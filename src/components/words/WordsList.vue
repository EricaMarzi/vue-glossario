<script>
import WordCard from './WordCard.vue';

export default {
  // Javascript Logic
  name: 'WordsList',

  components: { WordCard },

  props: { words: Array }
};
</script>

<template>
  <section>

    <div class="row row-cols-1 row-cols-md-12 g-4">
      <div class="col" v-for="word in words" :key="word.id">
        <h3>{{ word.term }}</h3>
        <WordCard :word="word" />
      </div>
    </div>

  </section>
</template>

<style lang="scss" scoped></style>