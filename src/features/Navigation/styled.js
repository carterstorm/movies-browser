import styled from "styled-components";

export const Wrapper = styled.header`
    background-color: ${({ theme }) => theme.colors.black};
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: ${({ theme }) => theme.breakpoints.desktop}px;
    margin: 0 auto;
    padding: 0 15px;
    
    @media(max-width: 1020px) {
        flex-wrap: wrap;
        justify-content: center;
    };
`;

export const NavContainerLeft = styled.div`
    display: flex;
    padding: 23px 0;
`;

export const NavContainerRight = styled.div`
    padding: 23px 0;
`;