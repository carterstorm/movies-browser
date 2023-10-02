import { ReactComponent as Star } from "../../assets/svg/star.svg";
import styled, { css } from "styled-components";

export const RatingElement = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: row;

    ${({ movieHero }) => movieHero && css`
        align-items: flex-start;
        flex-direction: column;
    `};

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        ${({ movieHero }) => movieHero && css`
            flex-direction: row;
            align-items: flex-end;
        `};
    };
`;

export const VoteElements = styled.div`
    display: flex;
    align-items: flex-end;

    ${({ movieHero }) => movieHero && css`
        margin-bottom: 16px;
    `};

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        ${({ movieHero }) => movieHero && css`
            margin-bottom: 0;
        `};
    };
`;

export const StarElement = styled(Star)`
    ${({ movieHero }) => movieHero && css`
        width: 40px;
        height: 40px;
    `};

    ${({ moviePage }) => moviePage && css`
        width: 30px;
        height: 30px;
    `};

    @media(max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
        ${({ movieHero }) => movieHero && css`
            width: 30px;
            height: 30px;
        `};
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        width: 22px;
        height: 22px;

        ${({ movieHero }) => movieHero && css`
            width: 30px;
            height: 30px;
        `};
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 16px;
        height: 16px;
    };
`;

export const VoteAverage = styled.span`
    margin-left: 12px;
    font-size: 16px;
    font-weight: 600;

    ${({ movieHero }) => movieHero && css`
        font-size: 30px;
        line-height: 110%;
    `};

    ${({ moviePage }) => moviePage && css`
        font-size: 22px;
    `};

    @media(max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
        font-size: 14px;

        ${({ movieHero }) => movieHero && css`
            font-size: 22px;
        `};

        ${({ moviePage }) => moviePage && css`
            font-size: 22px;
        `};
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        font-size: 14px;

        ${({ movieHero }) => movieHero && css`
            font-size: 22px;
            line-height: 90%;
        `};
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 12px;
        margin-left: 6px;

        ${({ movieHero }) => movieHero && css`
            font-size: 14px;
            margin-left: 6px;
        `};
    };
`;

export const VoteCount = styled(VoteAverage)`
    margin-left: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.waterloo};

    ${({ movieHero }) => movieHero && css`
        font-size: 16px;
        font-weight: 400;
        line-height: 120%;
        color: ${({ theme }) => theme.colors.white};
        margin-left: 0;
    `};

    ${({ moviePage }) => moviePage && css`
            font-size: 16px;
        `};

    @media(max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
        ${({ movieHero }) => movieHero && css`
            font-size: 12px;
        `};
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        font-size: 12px;

        ${({ movieHero }) => movieHero && css`
            margin-left: 16px;
        `};
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin-left: 8px;

        ${({ movieHero }) => movieHero && css`
            font-size: 10px;
            margin-left: 8px;
        `};
    };
`;

export const VoteMax = styled.span`
    ${({ movieHero }) => movieHero && css`
        font-size: 16px;
        font-weight: 400;
        line-height: 120%;
    `};

    @media(max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
        ${({ movieHero }) => movieHero && css`
            font-size: 12px;
        `};
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        font-size: 12px;

        ${({ movieHero }) => movieHero && css`
            margin-left: 6px;
        `};
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        ${({ movieHero }) => movieHero && css`
            font-size: 10px;
            margin-left: 2px;
        `};
    };
`;