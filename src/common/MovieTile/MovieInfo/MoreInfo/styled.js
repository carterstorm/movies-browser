import styled from "styled-components";

export const More = styled.div`
`;

export const MoreInfoElement = styled.div`
    margin: 8px 0;
`;

export const MoreInfoElementTitle = styled.span`
    margin-right: 8px;
    font-size: 18px;
    font-weight: 400;
    line-height: 120%;
    color: ${({ theme }) => theme.colors.waterloo};
`;

export const MoreInfoElementDescription = styled(MoreInfoElementTitle)`
    color: ${({ theme }) => theme.colors.black};
`;