<template>
    
    <section class="destaque" :style="{
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `${`url(https://image.tmdb.org/t/p/original`}${Destaque.backdrop_path})`}">
    <div class="destaque-vertical">
        <div class="destaque-horizontal">
            <div class="destaque-nome">
                {{Destaque.original_name}}
            </div>
            <div class="destaque-info">
                <div class="destaque-pontos">{{Destaque.vote_average}}</div>
                <div class="destaque-ano">{{anoLancamento}}</div>
                <div class="destaque-temporadas"> {{Destaque.number_of_seasons}} temporada{{Destaque.number_of_seasons > 1 ? 's' : ''}}</div>
            </div>
            <div class="destaque-descricao">
                 {{Destaque.overview}}
            </div>
            <div class="destaque-botoes">
                <a href="" class="destaque-botao-assistir">► Assitir</a>
                <a href="" class="destaque-botao-minhalista">+ Minha Lista</a>
            </div>
            <div class="destaque-generos">
                <strong>Gêneros: </strong> {{generos}}
            </div>
        </div>
    </div>
    </section>
    
</template>

<script>
import '../css/Destaque.css'
export default {
    props:{
        Destaque: {
            type: Object,
            required: true
        }
    },
    computed:{
        anoLancamento: function(){
            let ano = new Date(this.Destaque.first_air_date)
            return isNaN(ano) ? '' : ano.getFullYear();
        },
        generos: function(){
            let generos = [];
            
            for(let i in this.Destaque.genres){
                generos.push(this.Destaque.genres[i].name)
            }
            return generos.join(', ')
        }
    }
}
</script>
