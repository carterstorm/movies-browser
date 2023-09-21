import styled from "styled-components";
import search from "../../../assets/svg/search.svg";

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
    background-color: transparent;
    border: none;
    cursor: pointer;
    
    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        width: 18px;
        height: 18px;
        background-size: 18px;
    };
`;

export const SearchBoxInput = styled.input`
    width: 400px;
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
    
    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        height: 30px;
        font-size: 12px;
    };
`;