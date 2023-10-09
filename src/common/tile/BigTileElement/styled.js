import styled from "styled-components";

export const BigTileContainer = styled.div`
    margin: 0 auto;
    max-width: ${({ theme }) => theme.breakpoints.desktop}px;
    list-style: none;

    @media(max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
        padding: 0 16px;
    };
`;