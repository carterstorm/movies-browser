import styled from "styled-components";

export const BigTileContainer = styled.div`
    padding: 0 16px;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.breakpoints.desktop}px;
    list-style: none;
`;