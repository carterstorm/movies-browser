import styled from "styled-components";

export const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Tag = styled.div`
    padding: 8px 16px;
    margin: 0 8px 4px 0;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.mystic};

    &:nth-last-child(1) {
        margin-right: 0;
    };
`;

export const TagName = styled.span`
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
`;