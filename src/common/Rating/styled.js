import { ReactComponent as Star } from "../../assets/svg/star.svg";
import styled, { css } from "styled-components";

export const RatingElement = styled.div`
    display: flex;
    align-items: flex-end;
    line-height: 0.9;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        flex-wrap: wrap;
    };

    ${({ movieHero }) => movieHero && css`
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

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin-bottom: 4px;
    };

    ${({ movieHero }) => movieHero && css`
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

    ${({ movieHero }) => movieHero && css`
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

    ${({ movieHero }) => movieHero && css`
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

    ${({ moviePage }) => moviePage && css`
        font-size: 22px;

        @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
            font-size: 16px;
        };

        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
            font-size: 12px;
            margin-left: 4px;
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
        margin-bottom: 4px;
    };

    ${({ movieHero }) => movieHero && css`
        margin: 0 0 16px 0;
        color: ${({ theme }) => theme.colors.white};


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

    ${({ moviePage }) => moviePage && css`
        color: ${({ theme }) => theme.colors.black};

        @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
            font-size: 12px;
        };

        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
            font-size: 10px;
            margin-left: 6px;
        };
    `};
`;

export const VoteMax = styled.span`
    margin-left: 5px;

    ${({ moviePage }) => moviePage && css`
        @media (max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
            font-size: 16px;
        };

        @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
            font-size: 12px;
        };

        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
            font-size: 10px;
            margin-left: 4px;
        };
    `};
`;