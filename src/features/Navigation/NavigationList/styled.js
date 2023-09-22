import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    list-style: none;
    margin: 0 0 0 80px;
    padding: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin-left: 0;
    };
`;

export const ListItem = styled.li`
    margin-right: 16px;
    display: flex;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin-right: 12px;
    };

    @media(max-width: 1020px) {
        &:nth-last-child(1) {
        margin-right: 0;
        };
    };
`;

export const StyledNavLink = styled(NavLink)`
    display: flex;
    align-items: center;
    padding: 0 24px;
    height: 48px;
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 24px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        font-size: 12px;
        height: 30px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        padding: 0 12px;
    };
`;