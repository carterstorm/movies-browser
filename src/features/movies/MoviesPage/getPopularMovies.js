import axios from "axios";

export const getPopularMovies = async () => {
    try {
        const response = await axios.get(
            "https://api.themoviedb.org/3/movie/popular?api_key=59bb7fd84287cfdfaac50896dc742401&language=en-US&page=1"
        );
        return response.data;
    } catch (error) {
        console.error(error);
    };
};