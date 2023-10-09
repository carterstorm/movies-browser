import styled from "styled-components";
import { MoreInfoElement, MoreInfoElementDescription, MoreInfoElementTitle } from "../../MovieTile/Info/MoreInfo/styled";
import { MovieOverview } from "../../MovieTile/styled";

export const Info = styled.div``;

export const MorePersonInfoElement = styled(MoreInfoElement)``;

export const MorePersonInfoElementTitle = styled(MoreInfoElementTitle)``;

export const MorePersonInfoDescription = styled(MoreInfoElementDescription)``;

export const PersonOverview = styled(MovieOverview)`
    margin: 10px 0 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mediumMobile}px) {
        margin: 6px 0 0;
    };
`;