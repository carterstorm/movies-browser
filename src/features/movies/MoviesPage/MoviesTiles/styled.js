import { Link } from "react-router-dom";
import styled from "styled-components";

export const TilesSection = styled.section`
    margin-top: 24px;
`;

export const Tiles = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const Tile = styled.li`
    padding: 16px;
    box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.50);
    border-radius: 5px;
    cursor: pointer;
`;

export const TileLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
`;

export const Poster = styled.img`
    width: 292px;
    height: 434px;
    background-color: ${({ theme }) => theme.colors.black};;
    margin-bottom: 16px;
    border-radius: 5px;
`;

export const MovieDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 175px;
`;

export const Description = styled.div``;