import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../../assets/svg/arrow.svg";

export const PaginationButtonElement = styled.button`
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

export const PreviousButtonText = styled.span`
    display: inline-block;
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
    margin-left: 8px;
    background-color: ${({ theme }) => theme.colors.mystic};
`;

export const NextButtonText = styled(PreviousButtonText)`
    margin-left: 0;
    margin-right: 8px;
`;

export const LeftArrow = styled(Arrow)`
    width: 7px;
    height: 11px;
`;

export const RightArrow = styled(Arrow)`
    width: 7px;
    height: 11px;
    rotate: 180deg;
    order: 1;
`;