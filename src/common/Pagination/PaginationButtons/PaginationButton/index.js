import { useDispatch, useSelector } from "react-redux";
import { selectPage, setPage } from "../../../../features/movies/MoviesPage/moviesSlice";
import {
    LeftArrow,
    NextButtonText,
    PaginationButtonElement,
    PreviousButtonText,
    RightArrow
} from "./styled";

export const PaginationButton = ({ first, previous, next, last }) => {
    const dispatch = useDispatch();
    const page = useSelector(selectPage);

    if (first) {
        return (
            <PaginationButtonElement
                onClick={() => dispatch(setPage(1))}
                disabled={page === 1}
            >
                <LeftArrow />
                <PreviousButtonText>
                    First
                </PreviousButtonText>
            </PaginationButtonElement>
        );
    } else if (previous) {
        return (
            <PaginationButtonElement
                onClick={() => dispatch(setPage(page - 1))}
                disabled={page === 1}
            >
                <LeftArrow />
                <PreviousButtonText>
                    Previous
                </PreviousButtonText>
            </PaginationButtonElement>
        );
    } else if (next) {
        return (
            <PaginationButtonElement
                onClick={() => dispatch(setPage(page + 1))}
                disabled={page === 500}
            >
                <RightArrow />
                <NextButtonText>
                    Next
                </NextButtonText>
            </PaginationButtonElement>
        );
    } else if (last) {
        return (
            <PaginationButtonElement
                onClick={() => dispatch(setPage(500))}
                disabled={page === 500}
            >
                <RightArrow />
                <NextButtonText>
                    Last
                </NextButtonText>
            </PaginationButtonElement>
        );
    };
};