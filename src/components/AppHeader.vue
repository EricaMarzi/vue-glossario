<script>

export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <nav class="navbar bg-body-tertiary">
            <div class="px-5">

                <RouterLink class="navbar-brand" :to="{ name: 'home' }">Home</RouterLink>
                <RouterLink class="navbar-brand" :to="{ name: 'about-us' }">About Us</RouterLink>
            </div>
        </nav>
    </header>
</template>

<style lang='scss' scoped>
/* style here */
</style>