import { PagesInfo } from "./PageInfo";
import { PaginationButtons } from "./PaginationButtons";
import { PaginationNav } from "./styled";

export const Pagination = () => {
    return (
        <PaginationNav>
            <PaginationButtons previous />
            <PagesInfo />
            <PaginationButtons next />
        </PaginationNav>
    );
};