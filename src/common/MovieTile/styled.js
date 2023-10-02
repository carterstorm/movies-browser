import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Tile = styled.li`
    padding: 16px;
    box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.50);
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;

    ${({ moviePage }) => moviePage && css`
        padding: 0;
    `};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        padding: 10px;
        margin-top: 16px;
    };
`;

export const Container = styled.div``;

export const TileLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};

    ${({ moviePage }) => moviePage && css`
        display: flex;
        flex-direction: row;
        padding: 40px;
        margin: 64px 0;

        @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
            padding: 25px 25px 0;
            margin: 20px 0 0;
        };

        @media(max-width: ${({ theme }) => theme.breakpoints.mediumMobile}px) {
            padding: 16px 16px 0;
            margin: 16px 0 0;
        };

        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
            padding: 0;
            margin: 0;
        };
    `};

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        display: flex;
    };
`;

export const Poster = styled.img`
    width: 292px;
    height: 434px;
    margin-bottom: 16px;
    border-radius: 5px;

    ${({ moviePage }) => moviePage && css`
        width: 312px;
        height: auto;
        object-fit: cover;
        margin-bottom: 0;
    `};

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        height: 230px;
        width: auto;
        margin-bottom: 0;
        margin-right: 20px;

        ${({ moviePage }) => moviePage && css`
            height: auto;
            width: 280px;
            margin-right: 0;
        `};
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mediumMobile}px) {
        ${({ moviePage }) => moviePage && css`
            width: 230px;
        `};
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        height: 210px;
        width: auto;
    };
`;

export const MovieDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
    flex-grow: 1;

    ${({ moviePage }) => moviePage && css`
        justify-content: flex-start;
        margin-left: 40px;
        padding: 8px 0;
        height: auto;

        @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
            margin-left: 25px;
        };

        @media(max-width: ${({ theme }) => theme.breakpoints.mediumMobile}px) {
            margin-left: 16px;
        };

        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
            margin-left: 12px;
            padding: 0;
        };
    `};

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        justify-content: flex-start;
    };
`;

export const Description = styled.div`
    display: grid;
    grid-gap: 8px;

    ${({ moviePage }) => moviePage && css`
        grid-gap: 24px;
        margin-bottom: 24px;

        @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
            grid-gap: 12px;
            margin-bottom: 12px;
        };

        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
            grid-gap: 4px;
            margin-bottom: 6px;
        };
    `};
`;

export const OverviewDesktopContainer = styled.div`
    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        display: none;
    };
`;

export const OverviewMobileContainer = styled.div`
    @media(min-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        display: none;
    };
`;

export const Overview = styled.p`
    font-style: normal;
    text-align: justify;
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    margin: 24px 0;
    text-indent: 26px;

    ${({ mobile }) => mobile && css`
        padding: 25px;
        margin: 0;

        @media(max-width: ${({ theme }) => theme.breakpoints.mediumMobile}px) {
            padding: 16px;
        };

        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
            padding: 10px 0 0;
        };
    `};

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        font-size: 16px
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mediumMobile}px) {
        font-size: 14px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 10px;
        line-height: 140%;
        font-weight: 300;
    };
`;