import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MoviesTiles } from "./MoviesTiles";
import { Heading } from "../../../common/Heading";
import { Pagination } from "../../../common/Pagination";
import { Checker } from "../../../common/Checker";
import { fetchGenres } from "../../../genresSlice";
import { Main } from "./styled";
import { usePageParameter } from "../../../pageParameters";
import { selectAreListError, selectAreListLoading, selectList, setPath } from "../../../listSlice";
import { api_key } from "../../../apiKey";

export const MoviesPage = () => {
    const dispatch = useDispatch();
    const areLoading = useSelector(selectAreListLoading);
    const areError = useSelector(selectAreListError);
    const path = useSelector(selectList);
    const urlPageNumber = +usePageParameter("page");
    const apiKey = api_key;

    useEffect(() => {
        dispatch(setPath(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=
        ${urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber}`));
    }, [dispatch, path, apiKey, urlPageNumber]);

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