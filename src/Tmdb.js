const API_KEY=''
const API_BASE='https://api.themoviedb.org/3'

const apiQuery = async (query) =>{
    const req= await fetch (`${API_BASE}${query}`)
    const jsondata = await req.json()
    return jsondata
}
export default {
    getHomeList : async () => {
        return [
            {
                "slug":'originals',
                "title":"Originais",
                "itens":await apiQuery(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                "slug":"trending",
                "title":"Recomendados ",
                "itens":await apiQuery (`/trending/all/week?language=pt-BR&api_key=${API_KEY}`),
    
            },
            {
                "slug":"romance",
                "title":"Romance ",
                "itens":await apiQuery(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`),
    
            }
        ]
    }
}
