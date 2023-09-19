import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchPopularMovies,
    selectArePopularMoviesLoading,
    selectPopularMovies
} from "./moviesSlice";

export const MoviesPage = () => {
    const popularMovies = useSelector(selectPopularMovies);
    const areLoading = useSelector(selectArePopularMoviesLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPopularMovies());
    }, [dispatch])

    return (
        <>
            <p>Movies page</p>
            <div>
                {areLoading
                    ? "loading"
                    : popularMovies.map(movie => <p key={movie.id}>{movie.title}</p>)
                }
            </div>
        </>

    );
};