import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MoviesTiles } from "./MoviesTiles";
import { Heading } from "../../../common/Heading";
import { Pagination } from "../../../common/Pagination";
import { Checker } from "../../../common/Checker";
import { fetchGenres } from "../../../genresSlice";
import { Main } from "./styled";
import { usePageParameter } from "../../../pageParameters";
import { selectAreListError, selectAreListLoading, setPage, setPath } from "../../../listSlice";

export const MoviesPage = () => {
    const dispatch = useDispatch();
    const areLoading = useSelector(selectAreListLoading);
    const areError = useSelector(selectAreListError);
    const urlPageNumber = +usePageParameter("page");

    useEffect(() => {
        dispatch(setPath("popularMovies"));
    }, [dispatch]);

    useEffect(() => {
        dispatch(setPage(urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber));
    }, [dispatch, urlPageNumber]);

    useEffect(() => {
        dispatch(fetchGenres())
    }, [dispatch]);

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