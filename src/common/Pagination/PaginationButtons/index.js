import { PaginationButton } from "./PaginationButton";
import { PaginationButtonsContainer } from "./styled";

export const PaginationButtons = ({ previous, next }) => {
    if (previous) {
        return (
            <PaginationButtonsContainer>
                <PaginationButton first />
                <PaginationButton previous />
            </PaginationButtonsContainer>
        );
    } else if (next) {
        return (
            <PaginationButtonsContainer>
                <PaginationButton next />
                <PaginationButton last />
            </PaginationButtonsContainer>
        );
    };
};