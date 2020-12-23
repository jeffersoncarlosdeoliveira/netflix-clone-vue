const API_KEY ='9274087c7992f7175c31b322c475df06';
const API_BASE ='https://api.themoviedb.org/3';

const basicFecth = async(endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default{

    buscaListaPaginaInicial: async () =>{
        return [
            {
                slug: 'originals',
                titulo: 'Originais do Netflix',
                items: await basicFecth(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'trending',
                titulo: 'Recomendados para você',
                items:  await basicFecth(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'toprated',
                titulo: 'Em alta',
                items: await basicFecth(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'family',
                titulo: 'Família',
                items: await basicFecth(`/discover/movie?with_genres=10751&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'action',
                titulo: 'Ação',
                items: await basicFecth(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'romance',
                titulo: 'Romance',
                items: await basicFecth(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'scifi',
                titulo: 'Ficção Cientifica',
                items: await basicFecth(`/discover/movie?with_genres=878&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'documentary',
                titulo: 'Crime',
                items: await basicFecth(`/discover/movie?with_genres=80&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    },
    buscarInformacoesFilme: async (IdFilmeSerie, tipo)=> {
        let info = {}
        
        if(IdFilmeSerie){
            switch(tipo){
                case 'movie':
                    info = await basicFecth(`/movie/${IdFilmeSerie}?&language=pt-BR&api_key=${API_KEY}`)
                    break;
                case 'tv':
                    info = await basicFecth(`/tv/${IdFilmeSerie}?&language=pt-BR&api_key=${API_KEY}`)
                    break;
                default:
                    info = null;
            }
        }
        return info;
    }
}