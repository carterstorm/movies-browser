import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Heading } from "../../../common/Heading";
import { Pagination } from "../../../common/Pagination";
import { Checker } from "../../../common/Checker";
import { fetchGenres } from "../../../genresSlice";
import { MoviesMain } from "./styled";
import { usePageParameter } from "../../../pageParameters";
import { resetListState, selectAreListError, selectAreListLoading, setPath } from "../../../listSlice";
import { TilesSection } from "../../../common/tiles/TilesSection";
import { MoviesTiles } from "../../../common/tiles/MoviesTiles";
import { apiBaseLink, apiKey, apiLanguage } from "../../../common/commonValues";

export const MoviesPage = () => {
    const dispatch = useDispatch();
    const areLoading = useSelector(selectAreListLoading);
    const areError = useSelector(selectAreListError);
    const urlPageNumber = +usePageParameter("page");

    useEffect(() => {
        dispatch(setPath(`${apiBaseLink}movie/popular?api_key=${apiKey}&language=${apiLanguage}S&page=
        ${urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber}`));

        return () => {
            dispatch(resetListState());
        };
    }, [dispatch, urlPageNumber]);

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