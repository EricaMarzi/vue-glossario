<script>
export default {
    name: 'WordCard',
    props: {
        word: Object
    }
}
</script>

<template>
    <div class="card text-center">
        <div class="card-header">
            <!-- Tags -->
            <div v-if="word.tags.length">
                <span v-for="tag in word.tags" class="badge rounded-pill text-black me-2"
                    :style="{ backgroundColor: tag.color }">
                    {{ tag.label }}
                </span>
            </div>
        </div>
        <div class="card-body">
            <!-- Description -->
            <p class="card-text">{{ word.description }}</p>

        </div>
        <div class="card-footer text-body-secondary">
            <!-- Links -->
            <ul v-if="word.links.length" class="list-group list-group-horizontal">
                <li v-for="link in word.links" :key="link.label" class="list-group-item">
                    <a target="_blank" :href="link.url">
                        {{ link.label }}
                    </a>
                </li>

            </ul>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.list-group-horizontal {
    justify-content: center;
}
</style>