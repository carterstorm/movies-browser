import styled from "styled-components";

export const ErrorWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    justify-content: center;
    gap: 24px;
    margin-top: 180px;
`;

export const ErrorImage = styled.img`
    width: 140px;
`;

export const ErrorInformation = styled.div`
    display: grid;
    justify-items: center;
    gap: 24px;
`;

export const ErrorHeading = styled.h4`
    margin: 0;
    font-size: 28px;
    font-weight: 600;
    line-height: 120%;
    text-align: center;
`;

export const ErrorParagraph = styled.p`
    margin: 0;
    text-align: center;
    font-size: 20px;
    font-weight: 300;
    line-height: 130%;
`;

export const ErrorButton = styled.button`
    display: flex;
    padding: 16px 20px;
    align-items: center;
    gap: 10px;
    border: none;
    border-radius: 5px;
    background-color: #0044CC;
    color: #FFFFFF;
    font-weight: 400;
    cursor: pointer;
`;