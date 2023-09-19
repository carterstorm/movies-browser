import styled from "styled-components";

export const Wrapper = styled.header`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.black};
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: ${({ theme }) => theme.breakpoints.desktop}px;
    min-height: 94px;
    margin: 0 auto;
    padding: 0 15px;
`;

export const NavContainerLeft = styled.div`
    display: flex;
`;

export const NavContainerRight = styled.div``;