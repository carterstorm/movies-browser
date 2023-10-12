import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
`;

export const Button = styled.button`
    padding: 15px 25px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.mystic};
    font-weight: 500;
    transition: .3s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.cornflowerBlue};
        color: ${({ theme }) => theme.colors.white};
    };
`;