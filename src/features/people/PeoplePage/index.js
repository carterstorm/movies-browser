import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePageParameter } from "../../../pageParameters";
import { Checker } from "../../../common/Checker";
import { Main } from "../../../common/Main";
import { Heading } from "../../../common/Heading";
import { Pagination } from "../../../common/Pagination";
import { TilesSection } from "../../../common/tiles/TilesSection";
import { PeopleTiles } from "../../../common/tiles/PeopleTiles";
import { checkPageUrlNumber } from "../../../common/commonFunction";
import {
    fetchList,
    resetListState,
    selectAreListError,
    selectAreListLoading,
    selectListState,
    selectTotalResults
} from "../../../listSlice";
import { NoResults } from "../../../common/NoResults";

export const PeoplePage = () => {
    const dispatch = useDispatch();
    const areLoading = useSelector(selectAreListLoading);
    const areError = useSelector(selectAreListError);
    const urlPageNumber = +usePageParameter("page");
    const urlQuery = usePageParameter("search");
    const page = checkPageUrlNumber(urlPageNumber);
    const results = useSelector(selectListState);
    const totalResults = useSelector(selectTotalResults);

    useEffect(() => {
        dispatch(fetchList({ urlQuery, page, type: "people" }));
        return () => {
            dispatch(resetListState());
        };
    }, [dispatch, urlQuery, page]);

    return (
        <Checker
            areLoading={areLoading}
            areError={areError}
        >

            {!results.list.length ?
                (<NoResults
                    urlQuery={urlQuery}
                />)
                :
                (<>
                    <Main>
                        <Heading
                            title={urlQuery
                                ? `Search results for "${urlQuery}" (${totalResults})`
                                : "Popular People"}
                        />
                        <TilesSection
                            children={<PeopleTiles />}
                            people
                        />
                    </Main>
                    <Pagination />
                </>)
            }
        </Checker >
    );
};