<script>
import axios from 'axios';
import AppSearch from '../components/AppSearch.vue';
import { store } from '../data/store';
const endpoint = 'http://localhost:8000/api/words/';

export default {
    name: 'HomePage',
    data: () => ({
        store,
        searchedText: '',
        words: [],
        filteredWords: [],

        letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
            'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    }),

    components: { AppSearch },
    computed: {
        // Funzione per filtrare i tasks nella barra di ricerca 
        searchedWords() {
            const text = this.searchedText.toLowerCase();
            if (!text) return this.filteredWords;
            return this.filteredWords.filter(word => word.term.toLowerCase().includes(text));
        },
    },
    methods: {
        fetchSearchedText(text) {
            this.searchedText = text;
        },

        fetchWords() {
            store.isLoading = true;
            axios.get(endpoint).then(res => {
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
    <main class="container mt-5 d-flex flex-column align-items-center row-gap-4">

        <h1 class="mt-3 title">Il Glossario del Piccolo Sviluppatore</h1>

        <!-- Ricerca words -->
        <AppSearch :placeholder="'Cerca termine...'" @live-text="fetchSearchedText" class="input" />


        <!-- lista delle lettere -->
        <div class="mt-3">
            <ul class="pagination justify-content-center d-flex flex-wrap">
                <li class="page-item" v-for="letter in letters" :key="letter">
                    <a class="page-link alphabet" role="button" @click="filterByLetter(letter)">{{ letter }}</a>
                </li>
                <li>
                    <!-- button show all -->
                    <button class="btn btn-custom" @click="showAllWords">All</button>
                </li>
            </ul>
            <div v-if="!store.isLoading && words">
                <!-- lista parole -->

                <ul class="row row-gap-2">
                    <li class="col-3" v-for="word in searchedWords" :key="word.id">
                        ➢ <RouterLink :to="`/words/${word.slug}`" class="term">
                            {{ word.term }}
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </main>
</template>

<style lang='scss' scoped>
.title {
    color: #105781;
}



.alphabet {
    color: #a72c23;
    font-weight: 600;

    border-color: #c2f0f8;

    &:hover {
        background-color: #def9fe;
        ;
    }
}

.btn-custom {
    background-color: #a72c23;
    color: white;
    font-weight: 600;
    border-radius: 0 10px 10px 0;
}

ul {
    list-style-type: none;
    padding-left: 0;
}

.term {
    text-transform: capitalize;
    text-decoration: none;
    color: #00273e;
    font-size: 18px;
    font-weight: 600;

    &:hover {
        color: #a72c23;
    }
}
</style>