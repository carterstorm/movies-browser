import { PaginationButtons } from "./PaginationButtons";
import { PagesInfo, PagesText, PaginationNav } from "./styled";

export const Pagination = () => {
    return (
        <PaginationNav>
            <PaginationButtons />
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
            <PaginationButtons />
        </PaginationNav>
    );
};