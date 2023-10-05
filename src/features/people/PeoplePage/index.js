import { useEffect } from "react";
import { Checker } from "../../../common/Checker";
import { selectAreListError, selectAreListLoading, setPage, setPath } from "../../../listSlice";
import { useDispatch, useSelector } from "react-redux";
import { usePageParameter } from "../../../pageParameters";
import { Heading } from "../../../common/Heading";
import { Pagination } from "../../../common/Pagination";

export const PeoplePage = () => {
    const dispatch = useDispatch();
    const areLoading = useSelector(selectAreListLoading);
    const areError = useSelector(selectAreListError);
    const urlPageNumber = +usePageParameter("page");

    useEffect(() => {
        dispatch(setPath("popularPeople"));
    }, [dispatch]);

    useEffect(() => {
        dispatch(setPage(urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber));
    }, [dispatch, urlPageNumber]);

    return (
        <>
            <Checker
                areLoading={areLoading}
                areError={areError}
            >
                <Heading
                    title="Popular people"
                />
                <Pagination />
            </Checker>
        </>
    );
};