<script>
export default {
    name: 'AppSearch',
    emits: ['live-text'],
    props: { placeholder: String }
}
</script>

<template>
    <div class="input-group">
        <input type="text" class="form-control input-custom" autofocus :placeholder="placeholder"
            v-model.trim="searchedText" @keyup="$emit('live-text', searchedText)">
        <button class="input-group-text btn-custom" id="basic-addon1"> <i class="fas fa-search"></i></button>
    </div>
</template>

<style lang='scss' scoped>
/* style here */
.input-group {
    max-width: 400px;
}

.input-custom {
    border-color: #c2f0f8;
}

.btn-custom {
    background-color: #a72c23;
    color: white;
    font-weight: 600;
    border-color: #a72c23;
}
</style>