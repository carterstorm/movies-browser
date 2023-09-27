import styled from "styled-components";
import { ReactComponent as Star } from "../../assets/svg/star.svg";

export const StarElement = styled(Star)`
    width: 24px;
    height: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 16px;
        height: 16px;
    };
`;