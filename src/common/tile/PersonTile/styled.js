import styled from "styled-components";
import {
    Container,
    Details,
    Poster,
    TileElement,
    TileLink
} from "../TileElement/styled";

export const PersonTileElement = styled(TileElement)``;

export const PersonContainer = styled(Container)``;

export const PersonTileLink = styled(TileLink)`
    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        flex-direction: column;
    };
`;

export const PersonPoster = styled(Poster)`
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

export const PersonDetails = styled(Details)`
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