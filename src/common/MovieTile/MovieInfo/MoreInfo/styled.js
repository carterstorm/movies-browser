import styled from "styled-components";

export const More = styled.div``;

export const MoreInfoElement = styled.div`
    margin: 8px 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
        margin: 6px 0;
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
`;

export const MoreInfoElementDescription = styled(MoreInfoElementTitle)`
    color: ${({ theme }) => theme.colors.black};
`;