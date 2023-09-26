import styled from "styled-components";

export const TilesSection = styled.section`
    padding: 0 16px 40px;
`;

export const Tiles = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, 324px);
    justify-content: center;
    grid-gap: 24px;
    margin: 0;
    padding: 0;
    list-style: none;

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        grid-template-columns: repeat(1, 1fr);
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        grid-gap: 16px;
    };
`;