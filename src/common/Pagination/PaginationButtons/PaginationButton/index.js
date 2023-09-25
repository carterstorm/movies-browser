import {
    LeftArrow,
    PaginationButtonElement,
    PaginationButtonText,
    RightArrow
} from "./styled";

export const PaginationButton = ({ first, previous, next, last }) => {
    if (first) {
        return (
            <PaginationButtonElement>
                <LeftArrow />
                <PaginationButtonText>
                    First
                </PaginationButtonText>
            </PaginationButtonElement>
        );
    } else if (previous) {
        return (
            <PaginationButtonElement>
                <LeftArrow />
                <PaginationButtonText>
                    Previous
                </PaginationButtonText>
            </PaginationButtonElement>
        );
    } else if (next) {
        return (
            <PaginationButtonElement>
                <RightArrow />
                <PaginationButtonText>
                    Next
                </PaginationButtonText>
            </PaginationButtonElement>
        );
    } else {
        return (
            <PaginationButtonElement>
                <RightArrow />
                <PaginationButtonText>
                    Last
                </PaginationButtonText>
            </PaginationButtonElement>
        );
    };
};