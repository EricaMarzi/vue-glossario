<script>
export default {
    name: 'App Loader'
}
</script>

<template>
    <div class="loader-overlay">
        <div class="spinner-border text-success" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.loader-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);

    .spinner-border {
        width: 100px;
        height: 100px;
    }
}
</style>