import styled from "styled-components";

export const More = styled.div``;

export const MoreInfoElement = styled.div`
    margin: 8px 0;
    display: flex;
    flex-wrap: wrap;

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        margin: 6px 0;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        margin: 4px 0;
    };
`;

export const MoreInfoDesktopContainer = styled.div`
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        display: none;
    };
`;

export const MoreInfoElementTitle = styled.span`
    margin-right: 8px;
    font-size: 18px;
    font-weight: 400;
    line-height: 120%;
    color: ${({ theme }) => theme.colors.waterloo};

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        font-size: 16px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mediumMobile}px) {
        font-size: 14px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 10px;
        display: none;
    };
`;

export const MoreInfoElementDescription = styled(MoreInfoElementTitle)`
    color: ${({ theme }) => theme.colors.black};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 10px;
        display: block;
        font-weight: 300;
    };
`;