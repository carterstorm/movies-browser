import styled, { css } from "styled-components";

export const ExtraInfoContainer = styled.div`
    display: flex;
`;

export const InfoContainer = styled.div``;

export const InfoTitle = styled.span`
    font-size: 18px;
    font-weight: 400;
    line-height: 120%;
    color: ${({ theme }) => theme.colors.waterloo};
`;

export const InfoDesctiption = styled(InfoTitle)`
    margin: 0 20px 0 8px;
    color: ${({ theme }) => theme.colors.black};

    ${({ upperCase }) => upperCase && css`
        text-transform: uppercase;
    `};
`;