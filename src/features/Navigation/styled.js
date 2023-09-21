import styled from "styled-components";

export const Wrapper = styled.header`
    background-color: ${({ theme }) => theme.colors.black};
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 15px;
`;

export const NavContainerLeft = styled.div`
    display: flex;
    padding: 23px 0;
`;

export const NavContainerRight = styled.div`
    padding: 23px 0;
`;