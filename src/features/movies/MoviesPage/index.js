import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePageParameter } from "../../../pageParameters";
import { Heading } from "../../../common/Heading";
import { Pagination } from "../../../common/Pagination";
import { Checker } from "../../../common/Checker";
import { TilesSection } from "../../../common/tiles/TilesSection";
import { MoviesTiles } from "../../../common/tiles/MoviesTiles";
import { Main } from "../../../common/Main";
import { fetchGenres } from "../../../genresSlice";
import { resetListState, selectAreListError, selectAreListLoading, setPath } from "../../../listSlice";
import { apiBaseLink, apiKey, apiLanguage } from "../../../common/commonValues";
import { checkPageUrlNumber } from "../../../common/commonFunction";

export const MoviesPage = () => {
    const dispatch = useDispatch();
    const areLoading = useSelector(selectAreListLoading);
    const areError = useSelector(selectAreListError);
    const urlPageNumber = +usePageParameter("page");

    useEffect(() => {
        dispatch(setPath(`${apiBaseLink}movie/popular?api_key=${apiKey}&language=${apiLanguage}S&page=
        ${checkPageUrlNumber(urlPageNumber)}`));

        return () => {
            dispatch(resetListState());
        };
    }, [dispatch, urlPageNumber]);

    useEffect(() => {
        dispatch(fetchGenres())
    }, [dispatch]);

    return (
        <Checker
            areLoading={areLoading}
            areError={areError}
        >
            <Main>
                <Heading
                    title="Popular movies"
                />
                <TilesSection
                    children={<MoviesTiles />}
                />
            </Main>
            <Pagination />
        </Checker>
    )
};