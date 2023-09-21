import styled from "styled-components";

export const RatingElement = styled.div`
    display: flex;

`;

export const StarImage = styled.img`
    width: 24px;
    height: 24px;
`;

export const VoteElements = styled.div`
    display: flex;
    align-items: flex-end;
    margin-left: 12px;
`;

export const VoteAverage = styled.p`
    margin: 0 12px 0 0;
    font-weight: 600;
`;

export const VoteCount = styled.span`
    font-weight: 400;
    color: ${({ theme }) => theme.colors.waterloo};
`;