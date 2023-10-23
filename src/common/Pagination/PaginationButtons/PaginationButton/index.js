import { useSelector } from "react-redux";
import { selectMaxPageNumber } from "../../../../listSlice";
import { usePageParameter, useReplacePageParameter } from "../../../../pageParameters";
import { checkPageUrlNumber } from "../../../commonFunction";
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
    const urlPageNumber = +usePageParameter("page");
    const page = checkPageUrlNumber(urlPageNumber);
    const maxPageNumber = useSelector(selectMaxPageNumber);
    const replacePageParameter = useReplacePageParameter();

    const onHandleClick = (pageNumber) => {
        replacePageParameter([
            {
                key: "page",
                value: pageNumber,
            }
        ]);
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
                disabled={page === maxPageNumber}
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
                onClick={() => onHandleClick(maxPageNumber)}
                disabled={page === maxPageNumber}
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