import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import WordDetailPage from "../pages/WordDetailPage.vue";
import TagWordsPage from "../pages/TagWordsPage.vue"
import AboutUsPage from "../pages/AboutUsPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: '/about-us', component: AboutUsPage, name: 'about-us' },
        { path: '/words/:slug', component: WordDetailPage, name: 'word-detail' },
        { path: '/tags/:slug/words', component: TagWordsPage, name: 'tag-words' },
        { path: '/not-found', component: NotFoundPage, name: 'not-found' },
        { path: '/:pathMatch(.*)*', redirect: '/not-found' }
    ]
});

export { router };
