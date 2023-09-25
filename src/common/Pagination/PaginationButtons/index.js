import { LeftArrow } from "./styled";
import { PaginationButton, PaginationButtonText, PaginationButtonsContainer } from "./styled";

export const PaginationButtons = () => {
    return (
        <PaginationButtonsContainer>
            <PaginationButton>
                <LeftArrow />
                <PaginationButtonText>
                    First
                </PaginationButtonText>
            </PaginationButton>
            <PaginationButton>
                <LeftArrow />
                <PaginationButtonText>
                    Previous
                </PaginationButtonText>
            </PaginationButton>
        </PaginationButtonsContainer>
    );
};