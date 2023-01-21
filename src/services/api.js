import axios from "axios";


// base da URL: https://api.themoviedb.org/3/
//url da api: https://api.themoviedb.org/3/movie/now_playing?api_key=93ce6e595f8eb68e509d270a39059352


const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});
export default api;