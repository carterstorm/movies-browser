import styled from "styled-components";
import { ReactComponent as Star } from "../../../assets/svg/star.svg";

export const RatingElement = styled.div`
    display: flex;

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        margin-top: 8px;
    };
`;

export const StarImage = styled(Star)`
    width: 24px;
    height: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 16px;
        height: 16px;
    };
`;

export const VoteElements = styled.div`
    display: flex;
    align-items: flex-end;
    margin-left: 12px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 10px;
    };
`;

export const VoteAverage = styled.span`
    margin: 0 12px 0 0;
    font-weight: 600;
`;

export const VoteCount = styled.span`
    font-weight: 400;
    color: ${({ theme }) => theme.colors.waterloo};
`;