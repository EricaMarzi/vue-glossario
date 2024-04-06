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
    <div v-if="word.tags.length" class="mb-3">
        <span v-for="tag in word.tags" class="badge rounded-pill  me-2" :style="{ backgroundColor: tag.color }">
            #{{ tag.label }}
        </span>
    </div>
    <!-- Description -->
    <div class="separator mb-3">
        <p class="description">{{ word.description }}</p>
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