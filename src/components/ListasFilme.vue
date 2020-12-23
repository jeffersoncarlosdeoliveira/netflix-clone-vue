<template>
    <div class="movierow">
        <h2>{{item.titulo}}</h2>
        <div class="movierow-esquerda">
            
        </div>
        <div class="movierow-direita">
            
        </div>
        <div class="movierow-listarea">
            <div class="movierow-list">
                <ul>
                    <ListasFilmeItem
                    v-for="filme in items.results"
                    :key="filme.id"
                    :listaFilmes="filme"
                    />
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import '../css/ListasFilmes.css'
import ListasFilmeItem from './ListasFilmeItem.vue'

export default {
    components:{
        ListasFilmeItem
    },
    props:{
        item: {
            type: Object,
            require: true
        },
        items:{
            type: Object,
            require: true
        }
    }
}
</script>