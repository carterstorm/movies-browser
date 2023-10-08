import styled from "styled-components";
import { Link } from "react-router-dom";

export const PersonTileElement = styled.li`
    padding: 16px;
    box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.50);
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        padding: 10px;
    };
`;

export const PersonContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const PersonTileLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
`;

export const PersonPoster = styled.img`
    width: 176px;
    height: 264px;
    border-radius: 5px;
    margin-bottom: 12px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 120px;
        height: auto;
        margin-bottom: 8px;
    };
`;

export const PersonDetails = styled.div`
    min-height: 50px;

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        min-height: 40px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        min-height: 34px;
    };
`;

export const PersonName = styled.p`
    margin: 0;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 130%;

    @media(max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
        font-size: 16px;
        font-weight: 400;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        font-size: 14px;
        line-height: 100%;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 12px;
    };
`;