import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MoviesTiles } from "./MoviesTiles";
import { Heading } from "../../../common/Heading";
import { Pagination } from "../../../common/Pagination";
import { Loading } from "../../../common/Loading";
import {
    fetchPopularMovies,
    selectArePopularMoviesLoading,
    selectPage,
    selectPopularMovies
} from "../../../moviesSlice";
import { fetchGenres } from "../../../genresSlice";
import { Main } from "./styled";

export const MoviesPage = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(selectPopularMovies);
    const isLoading = useSelector(selectArePopularMoviesLoading);
    const page = useSelector(selectPage);

    useEffect(() => {
        dispatch(fetchPopularMovies());
    }, [dispatch, page]);

    useEffect(() => {
        dispatch(fetchGenres())
    }, [dispatch])

    return (
        <Main>
            {isLoading ?
                (<Loading />)
                :
                (
                    <>
                        <Heading
                            title="Popular movies"
                        />
                        <MoviesTiles
                            popularMovies={popularMovies}
                        />
                        <Pagination />
                    </>
                )}
        </Main>
    )
};