import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePageParameter } from "../../../pageParameters";
import { Checker } from "../../../common/Checker";
import { Main } from "../../../common/Main";
import { Heading } from "../../../common/Heading";
import { Pagination } from "../../../common/Pagination";
import { TilesSection } from "../../../common/tiles/TilesSection";
import { PeopleTiles } from "../../../common/tiles/PeopleTiles";
import { resetListState, selectAreListError, selectAreListLoading, setPath } from "../../../listSlice";
import { apiBaseLink, apiKey, apiLanguage } from "../../../common/commonValues";

export const PeoplePage = () => {
    const dispatch = useDispatch();
    const areLoading = useSelector(selectAreListLoading);
    const areError = useSelector(selectAreListError);
    const urlPageNumber = +usePageParameter("page");

    useEffect(() => {
        dispatch(setPath(`${apiBaseLink}person/popular?api_key=${apiKey}&language=${apiLanguage}&page=
        ${urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber}`));

        return () => {
            dispatch(resetListState());
        };
    }, [dispatch, urlPageNumber]);

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