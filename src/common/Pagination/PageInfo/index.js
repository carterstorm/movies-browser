import { useSelector } from "react-redux";
import {
    PagesInfoContainer,
    PagesText
} from "./styled";
import { selectNumberOfPages, selectPage } from "../../../features/movies/MoviesPage/moviesSlice";

export const PagesInfo = () => {
    const page = useSelector(selectPage);
    const numberOfPages = useSelector(selectNumberOfPages)

    return (
        <PagesInfoContainer>
            <PagesText>
                Page
            </PagesText>
            {page}
            <PagesText>
                of
            </PagesText>
            {numberOfPages}
        </PagesInfoContainer>
    );
};