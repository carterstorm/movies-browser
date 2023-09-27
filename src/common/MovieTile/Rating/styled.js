import styled, { css } from "styled-components";

export const RatingElement = styled.div`
    display: flex;
    align-items: flex-end;
`;

export const VoteElements = styled.div`
    display: flex;
    align-items: flex-end;
`;

export const VoteNumber = styled.span`
    margin-left: 12px;
    font-weight: 600;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 10px;
        margin-left: 8px;
    };

    ${({ thin }) => thin && css`              
        font-weight: 400;
        color: ${({ theme }) => theme.colors.waterloo};    
    `};
`;