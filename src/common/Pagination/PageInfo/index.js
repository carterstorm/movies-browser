import { useSelector } from "react-redux";
import {
    PageInfoContainer,
    PageNumber,
    PageText,
} from "./styled";
import { selectNumberOfPages, selectPage } from "../../../features/movies/MoviesPage/moviesSlice";

export const PagesInfo = () => {
    const page = useSelector(selectPage);
    const numberOfPages = useSelector(selectNumberOfPages)

    return (
        <PageInfoContainer>
            <PageText>
                Page
            </PageText>
            <PageNumber>
                {page}
            </PageNumber>
            <PageText>
                of
            </PageText>
            <PageNumber>
                {numberOfPages}
            </PageNumber>
        </PageInfoContainer>
    );
};