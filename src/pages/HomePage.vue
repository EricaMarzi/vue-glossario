<script>
import axios from 'axios';
import { store } from '../data/store';
const endpoint = 'http://localhost:8000/api/words/';

export default {
    name: 'HomePage',

    data() {
        return {
            words: [],
            filteredWords: [],

            letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
            store
        };
    },

    methods: {
        fetchWords() {
            store.isLoading = true;
            axios.get(endpoint).then(res => {
                console.log(res.data);
                this.words = res.data;

                //filtro parole
                this.filteredWords = res.data;
            })
                .catch(error => {
                    console.error('Errore nel recupero delle parole:', error);
                    // Redirect programmatico alla pagina not found
                    this.$router.push({ name: 'not-found' });
                }).then(() => {
                    store.isLoading = false;
                });
        },

        filterByLetter(letter) {
            // filtra parole in base alla lettera
            this.filteredWords = this.words.filter(word => word.term.charAt(0).toUpperCase() === letter);
        },

        showAllWords() {
            // filtro button show
            this.filteredWords = this.words;
        },
    },
    created() {
        this.fetchWords();
    }
}
</script>

<template>
    <h1 class="mt-4">Glossario</h1>

    <div v-if="!store.isLoading && words">
        <!-- lista parole -->
        <ul class="list-group mt-4">
            <li class="list-group-item" v-for="word in filteredWords" :key="word.id">
                {{ word.term }}
            </li>
        </ul>

        <!-- lista delle lettere -->
        <div class="mt-3">
            <ul class="pagination justify-content-center d-flex flex-wrap">
                <li class="page-item" v-for="letter in letters" :key="letter">
                    <a class="page-link" role="button" @click="filterByLetter(letter)">{{ letter }}</a>
                </li>
            </ul>
        </div>


        <!-- button show all -->
        <button class="btn btn-primary mt-4" @click="showAllWords">All</button>

    </div>

</template>

<style lang='scss' scoped>
/* style here */
</style>