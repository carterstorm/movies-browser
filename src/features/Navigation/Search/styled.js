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