import styled from "styled-components";
import { ReactComponent as Search } from "../../assets/svg/search.svg";

export const SearchBox = styled.form`
    position: relative;
`;

export const SearchBoxButton = styled.button`
    position: absolute;
    top: 50%;
    left: 24px;
    transform: translateY(-50%);
    border: none;
    background-color: transparent;
    cursor: pointer;

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        left: 12px;
    };
`;

export const SearchImage = styled(Search)`
    margin-top: 2px;

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        margin-top: 3px;
        width: 18px;
        height: 18px;
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

    @media(max-width: 1020px) {
        width: 100%;
    };
    
    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        height: 30px;
        font-size: 12px;
        padding-left: 46px;
    };
`;