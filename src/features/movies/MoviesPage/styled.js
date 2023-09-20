import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const Main = styled.main`
    max-width: ${({ theme }) => theme.breakpoints.desktop}px;
    margin: 56px auto 0;
`;

export const Heading = styled.h2`
    font-size: 36px;
    font-weight: 600px;
    margin: 0 0 24px 0;
    padding: 0 16px;
`;

export const Tiles = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const Tile = styled.li`
    padding: 16px;
    box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.50);
    border-radius: 5px;
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

export const Description = styled.div``;

export const Info = styled.div`
    margin-bottom: 8px;
`;

export const Name = styled.p`
    font-size: 22px;
    font-weight: 500;
    margin: 0 0 8px 0;
`;

export const Year = styled.span`
    color: ${({ theme }) => theme.colors.waterloo};
    font-weight: 400;
`;

export const Tags = styled.div`
    display: flex;
`;

export const Tag = styled.div`
    padding: 8px 16px;
    margin-right: 8px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.mystic};

    &:nth-last-child(1) {
        margin-right: 0;
    };
`;

export const TagName = styled.span`
    font-size: 14px;
    font-weight: 400;
`;

export const Rating = styled.div`
    display: flex;
    align-items: flex-end;
    margin-top: 39px;
`;

export const StarImage = styled.img`
    width: 24px;
    height: 24px;
`;

export const Vote = styled.div`
    display: flex;
    margin-left: 12px;
`;

export const VoteAverage = styled.p`
    margin: 0 12px 0 0;
    font-weight: 600;
`;

export const VoteCount = styled.span`
    font-weight: 400;
    color: ${({ theme }) => theme.colors.waterloo};
`;