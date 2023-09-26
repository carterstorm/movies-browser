import { getGenres } from "../../MoviesGenres/getGenres";
import {
    Tag,
    TagName,
    TagsContainer
} from "./styled";

export const Tags = ({ genre }) => {
    console.log(genre);
    return (
        <TagsContainer>
            <Tag>
                <TagName>Action</TagName>
            </Tag>
            <Tag>
                <TagName>Adventure</TagName>
            </Tag>
            <Tag>
                <TagName>Drama</TagName>
            </Tag>
        </TagsContainer>
    );
};