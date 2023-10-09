import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const PersonTileElement = styled.li`
    padding: 16px;
    box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.50);
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        padding: 10px;
    };

    ${({ page }) => page && css`
        padding: 0;
        margin-top: 64px;

        @media(max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
            margin-top: 40px;
        };

        @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
            margin-top: 20px;
        };

        @media(max-width: ${({ theme }) => theme.breakpoints.mediumMobile}px) {
            margin-top: 16px;
        };

        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
            padding: 10px;
            margin-top: 10px;
        };
    `};
`;

export const PersonContainer = styled.div`
`;

export const PersonTileLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};

    ${({ page }) => page && css`
        display: flex;
        padding: 40px;

        @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
            padding: 25px;
        };

        @media(max-width: ${({ theme }) => theme.breakpoints.mediumMobile}px) {
            padding: 16px;
        };

        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
            padding: 0;
        };
    `};
`;

export const FloatContainer = styled.div``;

export const PersonPoster = styled.img`
    width: 176px;
    height: 264px;
    border-radius: 5px;
    margin-bottom: 12px;

    ${({ page }) => page && css`
        width: 399px;
        height: 564px;
        margin-bottom: 10px;
        margin-right: 40px;
        float: left;

        @media(max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
            height: 439px;
            width: auto;
            margin-right: 30px;
        };

        @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
            height: 300px;
            margin-right: 20px;
        };

        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
            height: 163px;
            margin-right: 10px;
        };
    `};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 120px;
        height: auto;
        margin-bottom: 8px;
    };
`;

export const PersonDetails = styled.div`
    min-height: 50px;

    ${({ page }) => page && css`
        display: grid;
        grid-gap: 24px;
        padding: 8px 0;

        @media(max-width: ${({ theme }) => theme.breakpoints.mediumMobile}px) {
            grid-gap: 12px;
        };

        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
            grid-gap: 8px;
            padding: 0;
        };
    `};

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        min-height: 40px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        min-height: 34px;
    };
`;

export const PersonName = styled.p`
    margin: 0;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 130%;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 12px;
    };

    ${({ page }) => page && css`
        font-size: 36px;
        font-weight: 600;
        line-height: 120%;
        text-align: left;

        @media(max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
            font-size: 30px;
        };

        @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
            font-size: 24px;
            line-height: 100%;
        };

        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
            font-size: 20px;
        };
    `};
`;