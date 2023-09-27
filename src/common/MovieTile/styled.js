import styled from "styled-components";
import { Link } from "react-router-dom";

export const Tile = styled.li`
    padding: 16px;
    box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.50);
    background-color: ${({ theme }) => theme.colors.white};
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
    margin-bottom: 16px;
    border-radius: 5px;

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

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        justify-content: flex-start;
    };
`;

export const Description = styled.div``;