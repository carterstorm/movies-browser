import {
    Tag,
    TagName,
    TagsContainer
} from "./styled";

export const Tags = ({ genre }) => {
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