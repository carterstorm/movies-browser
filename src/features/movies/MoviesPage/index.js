import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MoviesTiles } from "./MoviesTiles";
import { Heading } from "../../../common/Heading";
import { Pagination } from "../../../common/Pagination";
import { Checker } from "../../../common/Checker";
import {
    fetchPopularMovies,
    selectArePopularMoviesError,
    selectArePopularMoviesLoading,
    setPage,
} from "../../../moviesSlice";
import { fetchGenres } from "../../../genresSlice";
import { Main } from "./styled";
import { usePageParameter } from "../../../pageParameters";

export const MoviesPage = () => {
    const dispatch = useDispatch();
    const areLoading = useSelector(selectArePopularMoviesLoading);
    const areError = useSelector(selectArePopularMoviesError);
    const urlPageNumber = +usePageParameter("page");

    useEffect(() => {
        dispatch(fetchPopularMovies());
        dispatch(setPage(urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber));
    }, [dispatch, urlPageNumber]);

    useEffect(() => {
        dispatch(fetchGenres())
    }, [dispatch])

    return (
        <Main>
            <Checker
                areLoading={areLoading}
                areError={areError}
            >
                <Heading
                    title="Popular movies"
                />
                <MoviesTiles />
                <Pagination />
            </Checker>
        </Main>
    )
};