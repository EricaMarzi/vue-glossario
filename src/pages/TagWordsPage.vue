<script>
import WordsList from '../components/words/WordsList.vue';
import axios from 'axios';
const defaultEndpoint = 'http://localhost:8000/api/';
export default {
    name: 'TagWordsPage',
    components: { WordsList },
    data: () => ({
        words: [],
        tagLabel: '',
        isLoading: false
    }),
    methods: {
        async fetchWords() {
            this.isLoading = true;
            try {
                const res = await axios.get(defaultEndpoint + `tags/${this.$route.params.slug}/words`)
                const { words, label } = res.data;
                this.words = words;
                this.tagLabel = label;
            } catch (err) {
                console.error(err);
                this.$router.push({ name: 'not-found' });
            }
            this.isLoading = false;
        }
    },
    created() {
        this.fetchWords();
    }
}
</script>

<template>
    <div class="container mt-5">
        <h1 class="my-3">{{ tagLabel }} Words </h1>
        <WordsList v-if="!isLoading" :words="words" />

    </div>
</template>

<style>
/*Css*/
</style>