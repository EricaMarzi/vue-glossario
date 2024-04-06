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
    <section class="container my-4">
        <h1 class="mb-3">About Us</h1>

        <div v-if="!store.isLoading && users" class="d-flex justify-content-between ">

            <!-- Card -->
            <div v-for="user in users" :key="user.id" class="card">
                <div class="content">
                    <div class="back">
                        <div class="back-content">
                            <svg stroke="#ffffff" xmlns:xlink="http://www.w3.org/1999/xlink"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height="50px" width="50px"
                                fill="#ffffff">

                                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>

                                <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>


                            </svg>
                            <strong>{{ user.name }}</strong>
                        </div>
                    </div>
                    <div class="front">

                        <div class="img">
                            <div class="circle">
                            </div>
                            <div class="circle" id="right">
                            </div>
                            <div class="circle" id="bottom">
                            </div>
                        </div>

                        <div class="front-content">
                            <div class="description">
                                <img v-if="user.image" id="admin-images"
                                    src="../../public/img/4B4323D6-826F-457B-963A-E79939B54FD4_1_105_c.jpeg" alt=""
                                    class="img-fluid rounded">
                                <div class="title">
                                    <p class="title">
                                        <strong>{{ user.email }}</strong>
                                    </p>

                                </div>
                                <p class="card-footer">
                                    30 Mins &nbsp; | &nbsp; 1 Serving
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Fine Card -->

        </div>

    </section>

</template>

<style lang='scss' scoped>
/* Card Styles */
.card {
    overflow: visible;
    width: 190px;
    height: 254px;
    border-color: transparent;
}

.content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 300ms;
    box-shadow: 0px 0px 10px 1px #000000ee;
    border-radius: 5px;
}

.front,
.back {
    background-color: #151515;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 5px;
    overflow: hidden;
}

.back {
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    overflow: hidden;
}

.back::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 160px;
    height: 160%;
    background: linear-gradient(90deg, transparent, #ff9966, #ff9966, #ff9966, #ff9966, transparent);
    animation: rotation_481 5000ms infinite linear;
}

.back-content {
    position: absolute;
    width: 99%;
    height: 99%;
    // background-color: #151515;
    background-color: rgb(157 73 71);
    border-radius: 5px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
}

.card:hover .content {
    transform: rotateY(180deg);
}

@keyframes rotation_481 {
    0% {
        transform: rotateZ(0deg);
    }

    0% {
        transform: rotateZ(360deg);
    }
}

.front {
    transform: rotateY(180deg);
    color: white;
}

.front .front-content {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.front-content .badge {
    background-color: #00000055;
    padding: 2px 10px;
    border-radius: 10px;
    backdrop-filter: blur(2px);
    width: fit-content;
}

.description {
    box-shadow: 0px 0px 10px 5px #00000088;
    width: 100%;
    padding: 10px;
    background-color: #00000099;
    backdrop-filter: blur(5px);
    border-radius: 5px;
    text-align: center;
}

#admin-images {
    width: 100px;
    height: 100px;
}

.title {
    font-size: 11px;
    max-width: 100%;
    text-align: center;
}

.card-footer {
    color: #ffffff88;
    margin-top: 5px;
    font-size: 8px;
}

.front .img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.circle {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #ffbb66;
    position: relative;
    filter: blur(15px);
    animation: floating 2600ms infinite linear;
}

#bottom {
    background-color: #ff8866;
    left: 50px;
    top: 0px;
    width: 150px;
    height: 150px;
    animation-delay: -800ms;
}

#right {
    background-color: #ff2233;
    left: 160px;
    top: -80px;
    width: 30px;
    height: 30px;
    animation-delay: -1800ms;
}

@keyframes floating {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(10px);
    }

    100% {
        transform: translateY(0px);
    }
}
</style>