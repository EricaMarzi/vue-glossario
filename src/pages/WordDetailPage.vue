<script>
import WordCard from '../components/words/WordCard.vue';
import axios from 'axios';
const defaultEndpoint = 'http://localhost:8000/api/words/';
export default {
    name: 'WordDetailPage',
    components: { WordCard },
    data: () => ({
        word: null
    }),
    methods: {
        async getWord() {
            try {
                const res = await axios.get(defaultEndpoint + this.$route.params.slug);
                this.word = res.data;
            } catch (err) {
                console.error(err);
                this.$router.push({ name: 'not-found' });
            }
        }
    },
    created() {
        this.getWord();
    }
}
</script>

<template>
    <h1 v-if="word" class="mb-5">Termine: {{ word.term }}</h1>
    <WordCard :word="word" />
</template>

<style lang='scss' scoped>
/* style here */
</style>