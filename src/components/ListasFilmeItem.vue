<template>
    <div class="movierow-item">
        <li>
            <img :src="`${`https://image.tmdb.org/t/p/w300`}${listaFilmes.poster_path}`" :alt="`${`listaFilmes.original_title`}`">
        </li>
    </div>
</template>

<script>
export default {
    props:{
        listaFilmes:{
            type: Object,
            require: true
        }
    }
}
</script>
<style>

li{
    list-style: none;
}
</style>