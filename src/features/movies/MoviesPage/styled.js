import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const Main = styled.main`
    max-width: ${({ theme }) => theme.breakpoints.desktop}px;
    margin: 56px auto 0;
`;

export const Heading = styled.h2`
    font-size: 36px;
    font-weight: 600px;
    margin: 0;
`;

export const Tiles = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 650px;
    gap: 24px;
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const Tile = styled.li``;

export const TileLink = styled(Link)``;

export const Poster = styled.img``;

export const Description = styled.div``;

export const Info = styled.div``;

export const Name = styled.p``;

export const Year = styled.span``;

export const Tags = styled.div``;

export const Tag = styled.div``;

export const TagName = styled.span``;

export const Rating = styled.div``;

export const StarImage = styled.img``;

export const Vote = styled.div``;

export const VoteAverage = styled.span``;

export const VoteCount = styled.span``;
