<template>
    <div id="app">
        <div class="jumbotron">
            <h1 class="display-4">Yandex map application</h1>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import Home from './components/Home.vue';

    export default {
        name: 'app',
        components: {
            Home
        }
    };

</script>

<style>
</style>
