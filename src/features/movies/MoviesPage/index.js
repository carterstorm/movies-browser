import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Heading } from "../../../common/Heading";
import { Pagination } from "../../../common/Pagination";
import { Checker } from "../../../common/Checker";
import { fetchGenres } from "../../../genresSlice";
import { MoviesMain } from "./styled";
import { usePageParameter } from "../../../pageParameters";
import { resetListState, selectAreListError, selectAreListLoading, setPath } from "../../../listSlice";
import { api_key } from "../../../apiKey";
import { TilesSection } from "../../../common/tiles/TilesSection";
import { MoviesTiles } from "../../../common/tiles/MoviesTiles";

export const MoviesPage = () => {
    const dispatch = useDispatch();
    const areLoading = useSelector(selectAreListLoading);
    const areError = useSelector(selectAreListError);
    const urlPageNumber = +usePageParameter("page");
    const apiKey = api_key;

    useEffect(() => {
        dispatch(setPath(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=
        ${urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber}`));

        return () => {
            dispatch(resetListState());
        };
    }, [dispatch, apiKey, urlPageNumber]);

    useEffect(() => {
        dispatch(fetchGenres())
    }, [dispatch]);

    return (
        <MoviesMain>
            <Checker
                areLoading={areLoading}
                areError={areError}
            >
                <Heading
                    title="Popular movies"
                />
                <TilesSection
                    children={<MoviesTiles />}
                />
                <Pagination />
            </Checker>
        </MoviesMain>
    )
};