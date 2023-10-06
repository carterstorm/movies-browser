import styled from "styled-components";

export const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Tag = styled.div`
    display: flex;
    padding: 6px 14px;
    margin: 0 8px 4px 0;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.mystic};

    &:nth-last-child(1) {
        margin-right: 0;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        padding: 6px 12px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin-right: 4px;
        padding: 4px 8px;
    };
`;

export const TagName = styled.span`
    font-size: 12px;
    font-weight: 400;
    line-height: 140%;

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        font-size: 10px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 8px;
    };
`;