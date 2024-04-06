<script>
import WordCard from '../components/words/WordCard.vue';
import axios from 'axios';
import { store } from '../data/store';
const defaultEndpoint = 'http://localhost:8000/api/words/';
export default {
    name: 'WordDetailPage',
    components: { WordCard },
    data: () => ({
        word: null,
        store
    }),
    methods: {
        async getWord() {
            store.isLoading = true;
            try {
                const res = await axios.get(defaultEndpoint + this.$route.params.slug);
                this.word = res.data;
            } catch (err) {
                console.error(err);
                this.$router.push({ name: 'not-found' });
            }
            store.isLoading = false;
        }
    },
    created() {
        this.getWord();
    }
}
</script>

<template>
    <main class="container mt-5">
        <div v-if="!store.isLoading && word">

            <h1 class="mb-3 title">{{ word.term }}</h1>
            <WordCard :word="word" />
        </div>
    </main>
</template>

<style lang='scss' scoped>
.title {
    text-transform: capitalize;
    color: #105781;
}
</style>