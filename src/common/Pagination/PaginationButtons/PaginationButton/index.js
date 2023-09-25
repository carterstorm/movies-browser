import {
    LeftArrow,
    NextButtonText,
    PaginationButtonElement,
    PreviousButtonText,
    RightArrow
} from "./styled";

export const PaginationButton = ({ first, previous, next, last }) => {
    if (first) {
        return (
            <PaginationButtonElement>
                <LeftArrow />
                <PreviousButtonText>
                    First
                </PreviousButtonText>
            </PaginationButtonElement>
        );
    } else if (previous) {
        return (
            <PaginationButtonElement>
                <LeftArrow />
                <PreviousButtonText>
                    Previous
                </PreviousButtonText>
            </PaginationButtonElement>
        );
    } else if (next) {
        return (
            <PaginationButtonElement>
                <RightArrow />
                <NextButtonText>
                    Next
                </NextButtonText>
            </PaginationButtonElement>
        );
    } else if (last) {
        return (
            <PaginationButtonElement>
                <RightArrow />
                <NextButtonText>
                    Last
                </NextButtonText>
            </PaginationButtonElement>
        );
    };
};