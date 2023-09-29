import styled, { css } from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-gap: 8px;

    ${({ moviePage }) => moviePage && css`
        grid-gap: 24px;
    `};
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
`;

export const Name = styled.p`
    font-size: 22px;
    font-weight: 500;
    margin: 0 40px 0 0;
    line-height: 130%;
    
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 12px;
    };
`;

export const Year = styled.span`
    color: ${({ theme }) => theme.colors.waterloo};
    font-weight: 400;
    line-height: 150%;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 10px;
    };
`;