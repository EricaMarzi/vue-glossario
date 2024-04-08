<script>
import axios from 'axios';
import { store } from '../data/store';
const endpoint = 'http://localhost:8000/api/users/';

export default {
    name: 'AboutUsPage',
    data: () => ({
        users: [],
        store
    }),
    methods: {
        async fetchUsers() {
            store.isLoading = true;
            try {
                const res = await axios.get(endpoint);
                this.users = res.data;
            } catch (err) {
                console.error(err);
            }
            store.isLoading = false;
        }
    },
    created() {
        this.fetchUsers();
    }
}
</script>

<template>
    <section class="container my-5">
        <h1 class="mb-5 mt-3 title">Chi siamo</h1>

        <div class="card-wrap mb-5" v-for="user in users" :key="user.id">
            <div class="animation">

                <div class="my-5">

                    <div class="box-img">
                        <img :src="`/img/${user.image}`" :alt="user.name" class="img-fluid rounded">
                    </div>
                    <div class="box-text">
                        <h3 class="name">{{ user.name }}</h3>
                        <p>{{ user.description }}</p>
                    </div>
                </div>
            </div>
        </div>


    </section>

</template>

<style lang='scss' scoped>
.title {
    color: #105781;
    text-align: center;
}

.card-wrap::after {
    content: '';
    clear: both;
    display: table;
    overflow: auto;
}

img {
    width: 400px;
    height: 400px;
}

.card-wrap:nth-child(even) {
    text-align: left;

    img {
        box-shadow: -10px 10px 0px 0px #caeff5;
        float: left;
    }

    .box-text {
        margin-left: 450px;
    }
}

.card-wrap:nth-child(odd) {
    text-align: right;

    img {
        float: right;
        box-shadow: 10px 10px 0px 0px #caeff5;
    }

    .box-text {
        margin-right: 450px;
    }
}


.box-text {

    .name {
        color: #a72c23;
        margin-bottom: 20px;
    }

    p {
        font-size: 20px;
    }
}




//Animazione
.animation {
    border: none;
    background: none;
}

.animation::before {
    margin-left: auto;
}

.animation::after,
.animation::before {
    content: '';
    width: 0%;
    height: 2px;
    background: #a72c23;
    display: block;
    transition: 0.5s;
}

.animation:hover::after,
.animation:hover::before {
    width: 100%;
}

.animation.active::after,
.animation.active::before {
    width: 100%;
}
</style>