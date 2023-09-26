import axios from "axios";
import store from "./store";
import { api_key } from "./apiKey";

export const getPopularMovies = async () => {
    const pageNumber = store.getState().movies.page;
    const apiKey = api_key;

    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${pageNumber}`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    };
};