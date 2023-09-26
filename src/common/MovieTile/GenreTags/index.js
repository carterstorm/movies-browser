import { useSelector } from "react-redux";
import {
    selectAreGenresLoading,
    selectGenresList
} from "../../../genresSlice";
import {
    Tag,
    TagName,
    TagsContainer
} from "./styled";

export const GenreTags = ({ genre }) => {
    const genresList = useSelector(selectGenresList);
    const isLoading = useSelector(selectAreGenresLoading);

    return (
        <TagsContainer>
            {!isLoading && (genre &&
                genresList.map(({ id, name }) => (
                    (genre.includes(id)) &&
                    (
                        <Tag key={id}>
                            <TagName>
                                {name}
                            </TagName>
                        </Tag>
                    )
                )))}
        </TagsContainer>
    );
};