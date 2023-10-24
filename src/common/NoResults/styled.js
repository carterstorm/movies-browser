import styled from "styled-components";

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const NoResultsImage = styled.img`
    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        width: 90%;
    };
`;