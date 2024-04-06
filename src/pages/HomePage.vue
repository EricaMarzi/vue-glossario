<script>
import axios from 'axios';
import AppSearch from '../components/AppSearch.vue';
import store from '../assets/store';
const endpoint = 'http://localhost:8000/api/words/';

export default {
    name: 'HomePage',
    data: () => ({
        store,
        searchedText: '',
        placeholder: 'Cerca termine...'
    }),
    components: { AppSearch },
    computed: {
        // Funzione per filtrare i tasks nella barra di ricerca 
        // filteredWords() {
        //     const text = this.searchedText.toLowerCase();
        //     const words = this.store.words;
        //     console.log(this.store.words);
        //     return words.filter(word => word.term.toLowerCase().includes(text));
        // },
    },
    methods: {
        // Funzione per effettuare la chiamata API
        fetchWords() {
            axios.get(endpoint)
                .then(res => {
                    store.words = res.data.words;
                    console.log(store.words)
                })
                .catch((err) => {
                    console.err(err);
                })
                .then()
        },

    },
    created() {
        this.fetchWords();
    }
}
</script>

<template>
    <AppSearch :placeholder="placeholder" />
    <h1>Glossario</h1>
    <!-- <ul>
            <li v-for="word in words" :key="word.id" v-text="word.term"></li>
        </ul> -->

</template>

<style lang='scss' scoped>
/* style here */
</style>