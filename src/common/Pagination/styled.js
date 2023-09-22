import styled from "styled-components";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";

export const PaginationNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
`;

export const PaginationButtonsContainer = styled.div`
    display: flex;
`;

export const PaginationButton = styled.button`
    display: flex;
    align-items: center;
    padding: 8px 16px;
    margin-left: 12px;
    border: none;
    background-color: ${({ theme }) => theme.colors.mystic};
    border-radius: 5px;
    cursor: pointer;

    &:nth-child(1) {
        margin-left: 0;
    };
`;

export const PaginationButtonText = styled.span`
    display: inline-block;
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
    margin-left: 8px;
    background-color: ${({ theme }) => theme.colors.mystic};
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

export const LeftArrow = styled(Arrow)`
    width: 7px;
    height: 11px;
`;