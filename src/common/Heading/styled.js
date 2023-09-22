import styled from "styled-components";

export const HeadingElement = styled.h2`
    font-size: 36px;
    font-weight: 600px;
    margin: 56px 0 24px 0;
    padding: 0 16px;

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        font-size: 24px;
        margin: 36px 0 18px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin: 24px 0 12px;
    };
`;