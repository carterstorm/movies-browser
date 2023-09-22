import { LeftArrow, PagesInfo, PagesText, PaginationButton, PaginationButtonText, PaginationButtonsContainer, PaginationNav } from "./styled";

export const Pagination = () => {
    return (
        <PaginationNav>

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

            <PagesInfo>
                <PagesText>
                    Page
                </PagesText>
                1
                <PagesText>
                    of
                </PagesText>
                500
            </PagesInfo>

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
        </PaginationNav>
    );
};