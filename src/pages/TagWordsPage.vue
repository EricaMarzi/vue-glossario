<script>
import WordsList from '../components/words/WordsList.vue';
import axios from 'axios';
import { store } from '../data/store';
const defaultEndpoint = 'http://localhost:8000/api/';
export default {
    name: 'TagWordsPage',
    components: { WordsList },
    data: () => ({
        words: [],
        tagLabel: '',
        store
    }),
    methods: {
        async fetchWords() {
            store.isLoading = true;
            try {
                const res = await axios.get(defaultEndpoint + `tags/${this.$route.params.slug}/words`)
                const { words, label } = res.data;
                this.words = words;
                this.tagLabel = label;
            } catch (err) {
                console.error(err);
                this.$router.push({ name: 'not-found' });
            }
            store.isLoading = false;
        }
    },
    created() {
        this.fetchWords();

    },

    watch: {
        '$route'(to, from) {
            if (to.params.slug !== from.params.slug) {
                this.fetchWords();
            }
        }
    }
}
</script>

<template>
    <div class="container mt-5">
        <!-- <h1 class="my-3">{{ tagLabel }} Words </h1> -->
        <h1 class="my-3">Words con tag <span class="badge rounded-pill bg-secondary me-2">#{{ tagLabel }} </span>
        </h1>
        <WordsList v-if="!isLoading && words" :words="words" />

    </div>
</template>

<style>
/*Css*/
</style>