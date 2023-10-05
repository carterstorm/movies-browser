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

export const PersonTileLink = styled(MovieTileLink)``;

export const PersonPoster = styled(MoviePoster)`
    width: 177px;
    height: 264px;
    margin-bottom: 12px;
`;

export const NoImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 177px;
    height: 264px;
    background-color: ${({ theme }) => theme.colors.silver};
    border-radius: 5px;
`;

export const Image = styled.img`
    width: 72px;
    height: 72px;
`;

export const PersonDetails = styled(MovieDetails)`
    height: 60px;
`;

export const PersonName = styled.p`
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 130%;
    margin: 0;
`;