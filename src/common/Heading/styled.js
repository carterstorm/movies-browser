import styled from "styled-components";

export const HeadingElement = styled.h2`
    font-size: 36px;
    font-weight: 600px;
    margin: 0;
    padding: 56px 16px 24px;
    line-height: 1.5;

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        font-size: 24px;
        padding: 36px 16px 18px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 18px;
        padding: 24px 16px 12px;
    };
`;