import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePageParameter } from "../../../pageParameters";
import { Checker } from "../../../common/Checker";
import { Main } from "../../../common/Main";
import { Heading } from "../../../common/Heading";
import { Pagination } from "../../../common/Pagination";
import { TilesSection } from "../../../common/tiles/TilesSection";
import { PeopleTiles } from "../../../common/tiles/PeopleTiles";
import { fetchList, resetListState, selectAreListError, selectAreListLoading } from "../../../listSlice";
import { checkPageUrlNumber } from "../../../common/commonFunction";

export const PeoplePage = () => {
    const dispatch = useDispatch();
    const areLoading = useSelector(selectAreListLoading);
    const areError = useSelector(selectAreListError);
    const urlPageNumber = +usePageParameter("page");
    const urlQuery = usePageParameter("search");
    const page = checkPageUrlNumber(urlPageNumber);
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
            <Main>
                <Heading
                    title="Popular people"
                />
                <TilesSection
                    children={<PeopleTiles />}
                    people
                />
            </Main>
            <Pagination />
        </Checker>
    );
};