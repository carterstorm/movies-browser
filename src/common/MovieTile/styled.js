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
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        height: 200px;
        margin-right: 10px;
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
    line-height: 160%;
    margin: 24px 0;
    text-indent: 26px;
`;