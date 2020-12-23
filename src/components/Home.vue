<template>
        <div class="page">
            <Header/>
            <Destaque v-if="Destaque"
            :Destaque="Destaque"/>
            <div class="listas">
            <ListasFilme
            v-for="item in TodosFilmes"
            :key="item.slug"
            :item="item"
            :items="item.items"
            />
            </div>
            <div class="rodape">
                <Rodape />
            </div>
        </div>
</template>

<script>
import Tmdb from '../tmdb.js'
import ListasFilme from './ListasFilme.vue'
import Destaque from './Destaque.vue'
import Header from  './Header.vue'
import Rodape from  './Rodape.vue'

export default {
    components:{
        Destaque,
        Header,
        ListasFilme,
        Rodape
    },
    data(){
        return{
            TodosFilmes: [],
            Destaque: {},
            dataLancamento: undefined,
            generos:[]
        }
    },
    created(){
        const carregaTodosFilmes = async()=>{
            let lista = await Tmdb.buscaListaPaginaInicial();
            
            lista.forEach(element => {
                this.TodosFilmes.push(element);
            });
            
            let originals = lista.filter(i => i.slug ==="originals");
            let gerarNumeroAleatorio = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let filmeDestaqueEscolhido = originals[0].items.results[gerarNumeroAleatorio];
            let filmeDestaqueEscolhidoInfo = await Tmdb.buscarInformacoesFilme(filmeDestaqueEscolhido.id,'tv');
            this.Destaque = filmeDestaqueEscolhidoInfo;
        }
        carregaTodosFilmes();
    },
    methods:{
    }
}
</script>