import axios from "axios";
import { api_key } from "./apiKey";

export const getMoviesDetails = async (id) => {
    const apiKey = api_key;

    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    };
};