import { useDispatch, useSelector } from "react-redux";
import { selectNumberOfPages, selectPage, setPage } from "../../../../features/movies/MoviesPage/moviesSlice";
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

    if (first) {
        return (
            <PaginationButtonElement
                onClick={() => dispatch(setPage(1))}
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
                onClick={() => dispatch(setPage(page - 1))}
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
                onClick={() => dispatch(setPage(page + 1))}
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
                onClick={() => dispatch(setPage(numberOfPages))}
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