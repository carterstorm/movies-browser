import { useSelector } from "react-redux";
import {
    selectAreGenresLoading,
    selectGenresList
} from "../../../../genresSlice";
import {
    Tag,
    TagName,
    TagsContainer
} from "./styled";

export const GenreTags = ({ genre }) => {
    const genresList = useSelector(selectGenresList);
    const areLoading = useSelector(selectAreGenresLoading);

    return (
        <TagsContainer>
            {!areLoading ?
                (genre ?
                    genresList.map(({ id, name }) => (
                        (genre.includes(id)) ?
                            (<Tag
                                key={id}>
                                <TagName>
                                    {name}
                                </TagName>
                            </Tag>
                            )
                            : null
                    )) : null)
                : null}
        </TagsContainer>
    );
};