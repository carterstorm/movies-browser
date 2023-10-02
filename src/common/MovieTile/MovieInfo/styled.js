import styled, { css } from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-gap: 8px;

    ${({ moviePage }) => moviePage && css`
        grid-gap: 24px;

        @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
            grid-gap: 12px;
        };

        @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
            grid-gap: 4px;
        };
    `};
`;

export const Name = styled.p`
    font-size: 22px;
    font-weight: 500;
    margin: 0 40px 0 0;
    line-height: 130%;

    ${({ moviePage }) => moviePage && css`
        font-size: 36px;
        font-weight: 600;
        line-height: 120%;

        @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
            font-size: 26px;
        };

        @media(max-width: ${({ theme }) => theme.breakpoints.mediumMobile}px) {
            font-size: 20px;
        };
    `};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 12px;
    };
`;

export const Year = styled.span`
    color: ${({ theme }) => theme.colors.waterloo};
    font-weight: 400;
    line-height: 150%;

    ${({ moviePage }) => moviePage && css`
        font-size: 22px;
        color: ${({ theme }) => theme.colors.black};
        line-height: 120%;

        @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
            font-size: 16px;
        };

        @media(max-width: ${({ theme }) => theme.breakpoints.mediumMobile}px) {
            font-size: 14px;
        };
    `};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 10px;
    };
`;