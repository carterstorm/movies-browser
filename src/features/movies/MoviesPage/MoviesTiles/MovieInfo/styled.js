import styled from "styled-components";

export const MovieInfoContainer = styled.div`
    margin-bottom: 8px;
`;

export const MovieName = styled.p`
    font-size: 22px;
    font-weight: 500;
    margin: 0 0 8px 0;
    line-height: 130%;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 12px;
    };
`;

export const MovieYear = styled.span`
    color: ${({ theme }) => theme.colors.waterloo};
    font-weight: 400;
    line-height: 150%;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 10px;
    };
`;