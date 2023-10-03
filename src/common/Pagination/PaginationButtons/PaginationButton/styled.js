import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../../assets/svg/arrow.svg";

export const PaginationButtonElement = styled.button`
    display: flex;
    align-items: center;
    padding: 8px 16px;
    margin-left: 12px;
    border: none;
    background-color: ${({ theme }) => theme.colors.pattensBlue};
    border-radius: 5px;
    cursor: pointer;
    transition: .2s;

    @media(max-width: 767px) {
        padding: 8px 12px;
        margin-left: 10px;
    };

    &:nth-child(1) {
        margin-left: 0;
    };

    &:hover {
        filter: brightness(90%);
    };

    &:disabled {
        background-color: ${({ theme }) => theme.colors.mystic};
        color: ${({ theme }) => theme.colors.black};
        filter: brightness(90%);
        cursor: not-allowed;
    };
`;

export const DesktopPaginationButtonsContainer = styled.div`
    display: flex;
    align-items: center;

    @media(max-width: 767px) {
        display: none;
    };
`;

export const MobilePaginationButtonsContainer = styled.div`
    display: flex;
    align-items: center;

    @media(min-width: 768px) {
        display: none;
    };
`;

export const PreviousButtonText = styled.span`
    display: inline-block;
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
    margin-left: 8px;
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