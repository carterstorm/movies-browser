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
`;

export const Heading = styled.h1`
    font-weight: 500;
    font-size: 24px;
    margin: 0;
`;