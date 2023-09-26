import styled from "styled-components";
import { ReactComponent as Spinner } from "../../assets/svg/loading_spiner.svg";

export const LoadingContainer = styled.div`
    position: relative;
    top: 0;
    left: 0;
`;

export const LoadingSpinner = styled(Spinner)`
    height: 91px;
    position: absolute;
    top: 219px;
    left: 50%;
    transform: translateX(-50%);
    animation: spin;
    animation-duration: 0.75s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        top: 66px;
        height: 35px;
    };

    @keyframes spin {
        from {
            transform: translateX(-50%);
        };
         to {
            transform: translateX(-50%) rotate(360deg);
        };
    };
`;