import styled from "styled-components";

export const RatingElement = styled.div`
    display: flex;
    align-items: flex-end;
    margin-top: 39px;
`;

export const StarImage = styled.img`
    width: 24px;
    height: 24px;
`;

export const Vote = styled.div`
    display: flex;
    margin-left: 12px;
`;

export const VoteAverage = styled.p`
    margin: 0 12px 0 0;
    font-weight: 600;
    line-height: 150%;
`;

export const VoteCount = styled.span`
    font-weight: 400;
    color: ${({ theme }) => theme.colors.waterloo};
`;