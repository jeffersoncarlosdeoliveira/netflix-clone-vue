<template>
    <div class="movierow" >
        <h2>{{item.titulo}}</h2>
        <div class="movierow-esquerda" @click="navegaEsquerda()">
            <span class="material-icons">
                navigate_before
            </span>  
        </div>
        <div class="movierow-direita" @click="navegaDireita()">
            <span class="material-icons">
                navigate_next
            </span>
        </div>
        <div class="movierow-listarea">
            <div 
            class="movierow-list" 
            :style="{
                marginLeft: `${this.esquerda}px`,
                width:`${(items.results.length * 150)}px`
            }">
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
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '../css/ListasFilmes.css'
import ListasFilmeItem from './ListasFilmeItem.vue'

export default {
    components:{
        ListasFilmeItem
    },
    data(){
        return{
            esquerda: 0
        }
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
    },
    methods:{
        navegaDireita(){
            let x = this.esquerda -= (window.innerWidth /2); 
            let tamanhoLista = this.items.results.length * 150;
            if((window.innerWidth - tamanhoLista) > x){
                return this.esquerda = (window.innerWidth - tamanhoLista) - 60;
            }
            return this.esquerda = x;
        },
        navegaEsquerda(){
            let x = this.esquerda += (window.innerWidth /2); 
            if(x > 0){
                return this.esquerda = 0;
            }
            return this.esquerda = x;
        }
    }
}
</script>