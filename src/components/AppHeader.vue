<script>

export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <nav class="navbar bg-nav">
            <div class="px-5 d-flex gap-3">

                <img src="/img/logo-glossario.webp" alt="Logo" class="logo">
                <RouterLink class="navbar-brand button" :to="{ name: 'home' }">Home</RouterLink>
                <RouterLink class="navbar-brand button" :to="{ name: 'about-us' }">About Us</RouterLink>
            </div>
        </nav>
    </header>
</template>

<style lang='scss' scoped>
.bg-nav {
    background-color: #def9fe;
    box-shadow: 0px 0px 20px 0px #88e2f3;
    height: 80px;

    .logo {
        width: 100px;
    }
}




.button {
    color: #00273e;
    text-decoration: none;
    font-size: 25px;
    border: none;
    background: none;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
}

.button::before {
    margin-left: auto;
}

.button::after,
.button::before {
    content: '';
    width: 0%;
    height: 2px;
    background: #a72c23;
    display: block;
    transition: 0.5s;
}

.button:hover::after,
.button:hover::before {
    width: 100%;
}

.button.active::after,
.button.active::before {
    width: 100%;
}
</style>