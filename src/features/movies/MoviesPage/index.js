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
} from "./moviesSlice";

import { Main } from "./styled";

export const MoviesPage = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(selectPopularMovies);
    const areLoading = useSelector(selectArePopularMoviesLoading);
    const page = useSelector(selectPage);

    useEffect(() => {
        dispatch(fetchPopularMovies());
    }, [dispatch, page])

    return (
        <Main>
            {areLoading ?
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