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
import { fetchList, resetListState, selectAreListError, selectAreListLoading } from "../../../listSlice";
import { checkPageUrlNumber } from "../../../common/commonFunction";

export const MoviesPage = () => {
    const dispatch = useDispatch();
    const areLoading = useSelector(selectAreListLoading);
    const areError = useSelector(selectAreListError);
    const urlPageNumber = +usePageParameter("page");
    const urlQuery = usePageParameter("search");
    const page = checkPageUrlNumber(urlPageNumber);

    useEffect(() => {
        dispatch(fetchList({ urlQuery, page, type: "movies" }));
        return () => {
            dispatch(resetListState());
        };
    }, [dispatch, page, urlQuery]);

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