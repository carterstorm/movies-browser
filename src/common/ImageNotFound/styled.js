import styled from "styled-components";

export const NoImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 177px;
    height: 264px;
    background-color: ${({ theme }) => theme.colors.silver};
    border-radius: 5px;
    margin-bottom: 12px;
`;

export const Image = styled.img`
    width: 72px;
    height: 72px;
`;