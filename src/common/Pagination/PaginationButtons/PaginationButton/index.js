import { useDispatch, useSelector } from "react-redux";
import { selectNumberOfPages, selectPage, setPage } from "../../../../listSlice";
import { useReplacePageParameter } from "../../../../pageParameters";
import {
    DesktopPaginationButtonsContainer,
    LeftArrow,
    MobilePaginationButtonsContainer,
    NextButtonText,
    PaginationButtonElement,
    PreviousButtonText,
    RightArrow
} from "./styled";

export const PaginationButton = ({ first, previous, next, last }) => {
    const dispatch = useDispatch();
    const page = useSelector(selectPage);
    const numberOfPages = useSelector(selectNumberOfPages);
    const replacePageParameter = useReplacePageParameter();

    const onHandleClick = (pageNumber) => {
        replacePageParameter("page", pageNumber);
        dispatch(setPage(pageNumber));
    };

    if (first) {
        return (
            <PaginationButtonElement
                onClick={() => onHandleClick(1)}
                disabled={page === 1}
            >
                <DesktopPaginationButtonsContainer>
                    <LeftArrow />
                    <PreviousButtonText>
                        First
                    </PreviousButtonText>
                </DesktopPaginationButtonsContainer>
                <MobilePaginationButtonsContainer>
                    <LeftArrow />
                    <LeftArrow />
                </MobilePaginationButtonsContainer>
            </PaginationButtonElement>
        );
    } else if (previous) {
        return (
            <PaginationButtonElement
                onClick={() => onHandleClick(page - 1)}
                disabled={page === 1}
            >
                <DesktopPaginationButtonsContainer>
                    <LeftArrow />
                    <PreviousButtonText>
                        Previous
                    </PreviousButtonText>
                </DesktopPaginationButtonsContainer>
                <MobilePaginationButtonsContainer>
                    <LeftArrow />
                </MobilePaginationButtonsContainer>
            </PaginationButtonElement>
        );
    } else if (next) {
        return (
            <PaginationButtonElement
                onClick={() => onHandleClick(page + 1)}
                disabled={page === numberOfPages}
            >
                <DesktopPaginationButtonsContainer>
                    <NextButtonText>
                        Next
                    </NextButtonText>
                    <RightArrow />
                </DesktopPaginationButtonsContainer>
                <MobilePaginationButtonsContainer>
                    <RightArrow />
                </MobilePaginationButtonsContainer>
            </PaginationButtonElement>
        );
    } else if (last) {
        return (
            <PaginationButtonElement
                onClick={() => onHandleClick(numberOfPages)}
                disabled={page === numberOfPages}
            >
                <DesktopPaginationButtonsContainer>
                    <NextButtonText>
                        Last
                    </NextButtonText>
                    <RightArrow />
                </DesktopPaginationButtonsContainer>
                <MobilePaginationButtonsContainer>
                    <RightArrow />
                    <RightArrow />
                </MobilePaginationButtonsContainer>
            </PaginationButtonElement>
        );
    };
};