import { ReactComponent as Star } from "../../assets/svg/star.svg";
import styled, { css } from "styled-components";

export const Statistics = styled.div`
    display: flex;
    align-items: flex-end;
    line-height: 0.9;

    ${({ moviePage }) => moviePage && css`
        flex-direction: column;
        align-items: flex-start;

        @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
            flex-direction: row;
            align-items: flex-end;
        };
    `};
`;

export const VoteElements = styled.div`
    display: flex;
    align-items: flex-end;

    ${({ moviePage }) => moviePage && css`
        margin-bottom: 16px;

        @media (max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
            margin-bottom: 10px;
        };

        @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
            margin-bottom: 0;
        };
    `};
`;

export const StarElement = styled(Star)`
    width: 24px;
    height: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 16px;
        height: 16px;
    };

    ${({ moviePage }) => moviePage && css`
        width: 40px;
        height: 40px;

        @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
            width: 22px;
            height: 22px;
        };

        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
            width: 16px;
            height: 16px;
        };
    `};
`;

export const VoteAverage = styled.span`
    margin-left: 12px;
    font-weight: 600;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 10px;
        margin-left: 8px;
    };

    ${({ moviePage }) => moviePage && css`
        font-size: 30px;

        @media (max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
            margin-left: 6px;
        };

        @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
            font-size: 22px;
            flex-direction: row;
            align-items: flex-end;
        };

        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
            font-size: 14px;
        };
    `};
`;

export const VoteCount = styled.span`
    font-weight: 400;
    color: ${({ theme }) => theme.colors.waterloo};
    margin-left: 12px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 10px;
        margin-left: 8px;
    };

    ${({ moviePage }) => moviePage && css`
        margin: 0 0 16px 0;
        color: ${({ theme }) => theme.colors.waterloo};

        @media (max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
            margin-bottom: 10px;
            font-size: 12px;
        };

        @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
            margin-bottom: 0;
            margin-left: 16px;
        };

        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
            font-size: 10px;
            margin-left: 8px;
        };
    `};
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