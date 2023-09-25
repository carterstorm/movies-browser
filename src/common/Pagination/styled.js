import styled from "styled-components";

export const PaginationNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 40px;
`;

export const PagesInfo = styled.div`
    margin: 0 24px;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 600;
    line-height: 150%;
`;

export const PagesText = styled.span`
    margin: 0 8px;
    color: ${({ theme }) => theme.colors.waterloo};
    font-weight: 400;

    &:nth-child(1) {
        margin-left: 0;
    };
`;