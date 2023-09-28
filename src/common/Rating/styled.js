import { ReactComponent as Star } from "../../assets/svg/star.svg";
import styled from "styled-components";

export const RatingElement = styled.div`
    display: flex;
    align-items: flex-end;
    line-height: 0.9;
`;

export const VoteElements = styled.div`
    display: flex;
    align-items: flex-end;
`;

export const StarElement = styled(Star)`
    width: 24px;
    height: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 16px;
        height: 16px;
    };
`;

export const VoteAverage = styled.span`
    margin-left: 12px;
    font-weight: 600;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 10px;
        margin-left: 8px;
    };
`;

export const VoteCount = styled.span`
    font-weight: 400;
    color: ${({ theme }) => theme.colors.waterloo};
    margin-left: 12px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 10px;
        margin-left: 8px;
    };
`;

export const VoteMax = styled.span`
    margin-left: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
        font-size: 12px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 10px;
    };
`;