import styled from "styled-components";
import { ReactComponent as Spinner } from "../../assets/svg/loading_spiner.svg";

export const LoadingContainer = styled.div`
    position: relative;
    top: 0;
    left: 0;
`;

export const LoadingSpinner = styled(Spinner)`
    position: absolute;
    top: 219px;
    left: 50%;
    transform: translateX(-50%);
    height: 91px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        top: 66px;
        height: 35px;
    };
`;