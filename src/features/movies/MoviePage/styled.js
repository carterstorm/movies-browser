import styled from "styled-components";

export const BigTileMovieContainer = styled.ul`
    padding: 16px;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.breakpoints.desktop}px;
    list-style: none;
`;