import { Link } from "react-router-dom";
import styled from "styled-components";

export const TilesSection = styled.section`
    padding: 0 16px 40px;
`;

export const Tiles = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, 324px);
    justify-content: center;
    grid-gap: 24px;
    margin: 0;
    padding: 0;
    list-style: none;

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        grid-template-columns: repeat(1, 1fr);
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        grid-gap: 16px;
    };
`;

export const Tile = styled.li`
    padding: 16px;
    box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.50);
    border-radius: 5px;
    cursor: pointer;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        padding: 10px;
    };
`;

export const TileLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        display: flex;
    };
`;

export const Poster = styled.img`
    width: 292px;
    height: 434px;
    background-color: ${({ theme }) => theme.colors.black};;
    margin-bottom: 16px;
    border-radius: 5px;

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        height: 230px;
        width: auto;
        margin-bottom: 0;
        margin-right: 20px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        height: 175px;
        margin-right: 10px;
    };
`;

export const MovieDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 175px;

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        justify-content: flex-start;
    };
`;

export const Description = styled.div``;