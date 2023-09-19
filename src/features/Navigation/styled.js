import styled from "styled-components";
import search from "../../assets/svg/search.svg";

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

export const NavContainerRight = styled.div`

`;

export const SearchBox = styled.form`
    position: relative;
`;

export const SearchBoxButton = styled.button`
    position: absolute;
    top: 50%;
    left: 24px;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background-image: url(${search});
    background-size: 24px;
    background-repeat: none;
    background-position: center;
    border: none;
    cursor: pointer;
`;

export const SearchBoxInput = styled.input`
    width: 432px;
    height: 48px;
    background-color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 24px;
    padding: 0 0 0 64px;
    cursor: pointer;

    &:focus {
        outline: none;
    };

    &::placeholder {
        color: ${({ theme }) => theme.colors.waterloo};
        font-weight: 300;
    };
`;