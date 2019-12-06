<template>
    <div class="home">
        <h1>{{ msg }}</h1>
        <p>This is home page of Yandex Map Application</p>
    </div>
</template>

<script>
    export default {
        name: 'Home page',
        props: {
            msg: String
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
