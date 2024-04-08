<script>
export default {
    name: 'WordCard',
    props: {
        word: Object
    }
}
</script>

<template>

    <!-- Tags -->
    <div v-if="word.tags?.length" class="mb-3">
        <RouterLink v-for="tag in word.tags" :to="{ name: 'tag-words', params: { slug: tag.slug } }">
            <span class="badge rounded-pill  me-2" :style="{ backgroundColor: tag.color }">
                #{{ tag.label }}
            </span>
        </RouterLink>
    </div>


    <!-- Description -->
    <div class="separator mb-3">
        <p class="description m-0">{{ word.description }}</p>
    </div>

    <!-- Links -->
    <div v-if="word.links.length">
        <span class="bold">Fonti:</span>
        <ul>
            <li v-for="link in word.links" :key="link.label">
                ➢ <a target="_blank" :href="link.url">{{ link.label }}</a>
            </li>
        </ul>
    </div>


</template>

<style lang='scss' scoped>
.separator {
    width: 100%;
    border-bottom: 1px solid #c2f0f8;
    border-top: 1px solid #c2f0f8;
    padding: 16px 0;
}

.bold {
    font-weight: 600;
}

ul {
    list-style-type: none;
}

a {
    color: #a72c23;
}
</style>