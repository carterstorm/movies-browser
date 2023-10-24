import no_results from "../../assets/svg/no_results.svg"
import { Heading } from "../Heading";
import { Main } from "../Main";
import { ImageContainer, NoResultsImage } from "./styled";

export const NoResults = ({ urlQuery }) => (
    <Main>
        <Heading
            title={`Sorry, but there are no results for "${urlQuery}"`}
        />
        <ImageContainer>
            <NoResultsImage
                src={no_results}
                alt="No results image"
            />
        </ImageContainer>
    </Main>

);