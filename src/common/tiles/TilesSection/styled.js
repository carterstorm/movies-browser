import styled, { css } from "styled-components";

export const TilesSectionElement = styled.section`
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

    ${({ people }) => people && css`
        grid-template-columns: repeat(auto-fill, 208px);
    `};

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        grid-template-columns: repeat(1, 1fr);

        ${({ people }) => people && css`
            grid-template-columns: repeat(auto-fill, 208px);
        `};
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        grid-gap: 16px;

        ${({ people }) => people && css`
            grid-template-columns: repeat(2, 140px);
            grid-gap: 10px;
        `};
    };
`;