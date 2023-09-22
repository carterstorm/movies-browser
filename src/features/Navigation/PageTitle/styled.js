import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled(Link)`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    text-transform: capitalize;
    padding: 4px 0;
`;

export const Logo = styled.img`
    margin-right: 12px;
    width: 40px;
    height: 40px;

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        width: 28px;
        height: 28px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 17px;
        height: 17px;
        margin-right: 8px;
    };
`;

export const Heading = styled.h1`
    font-weight: 500;
    font-size: 24px;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        font-size: 16px;
    };
    
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 13px;
    };
`;