import axios from "axios";
import { api_key } from "../../../../apiKey";

export const getGenres = async () => {
    const apiKey = api_key;

    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
        );
        return response.data.genres;
    } catch (error) {
        console.error(error);
    };
};