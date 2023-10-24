
import { useDispatch, useSelector } from "react-redux";
import { usePageParameter } from "../../pageParameters";
import { checkPageUrlNumber } from "../commonFunction";
import { useEffect } from "react";
import { Checker } from "../Checker";
import { NoResults } from "../NoResults";
import { Main } from "../Main";
import { Heading } from "../Heading";
import { TilesSection } from "../tiles/TilesSection";
import { Pagination } from "../Pagination";
import { MoviesTiles } from "../tiles/MoviesTiles"
import { PeopleTiles } from "../tiles/PeopleTiles";
import {
    fetchList,
    resetListState,
    selectAreListError,
    selectAreListLoading,
    selectListState,
    selectTotalResults
} from "../../listSlice";

export const ListPage = ({ type, headingTitle, movies, people }) => {
    const dispatch = useDispatch();
    const areLoading = useSelector(selectAreListLoading);
    const areError = useSelector(selectAreListError);
    const urlPageNumber = +usePageParameter("page");
    const urlQuery = usePageParameter("search");
    const page = checkPageUrlNumber(urlPageNumber);
    const results = useSelector(selectListState);
    const totalResults = useSelector(selectTotalResults);

    useEffect(() => {
        dispatch(fetchList({ urlQuery, page, type: type }));
        return () => {
            dispatch(resetListState());
        };
    }, [dispatch, page, urlQuery, type]);

    return (
        <Checker
            areLoading={areLoading}
            areError={areError}
        >
            {!results.list.length ?
                (<NoResults urlQuery={urlQuery} />)
                :
                (<>
                    <Main>
                        <Heading
                            title={urlQuery
                                ? `Search results for "${urlQuery}" (${totalResults})`
                                : headingTitle}
                        />
                        <TilesSection
                            people={people}
                            children={movies
                                ? <MoviesTiles />
                                : <PeopleTiles />}
                        />
                    </Main>
                    <Pagination />
                </>)
            }
        </Checker>
    )
};