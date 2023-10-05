import styled from "styled-components";
import {
    MovieContainer,
    MovieDetails,
    MoviePoster,
    MovieTileElement,
    MovieTileLink
} from "../MovieTile/styled";

export const PersonTileElement = styled(MovieTileElement)``;

export const PersonContainer = styled(MovieContainer)``;

export const PersonTileLink = styled(MovieTileLink)`
    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        flex-direction: column;
    };
`;

export const PersonPoster = styled(MoviePoster)`
    width: 177px;
    height: 264px;
    margin-bottom: 12px;

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        margin-bottom: 8px;
        margin-right: 0;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 120px;
        height: 178px;
    };
`;

export const PersonDetails = styled(MovieDetails)`
    height: 60px;

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        height: 50px;
    };
`;

export const PersonName = styled.p`
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 130%;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        font-size: 14px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 12px;
    };
`;