import styled from "styled-components";

export const PageInfoContainer = styled.div`
    margin: 0 24px;
    line-height: 150%;

    @media(max-width: 767px) {
        margin: 0 8px;
    };
`;

export const PageText = styled.span`
    margin: 0 8px;
    color: ${({ theme }) => theme.colors.waterloo};
    font-weight: 400;

    @media(max-width: 767px) {
        font-size: 10px;
        margin: 0 4px;
    };

    &:nth-child(1) {
        margin-left: 0;
    };
`;

export const PageNumber = styled.span`
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black};

    @media(max-width: 767px) {
        font-size: 10px;
    };
`;