import { ExtraInfo } from "./ExtraInfo";
import { MoreInfo } from "./MoreInfo";
import {
    Container,
    Info,
    Name,
    Year
} from "./styled";

export const MovieInfo = ({
    title,
    releaseDate,
    original_language,
    runtime,
    budget,
    production_countries,
    moviePage,
}) => {
    if (moviePage) {
        return (
            <Container
                moviePage
            >
                <Info>
                    <Name>
                        {title}
                    </Name>
                    <ExtraInfo
                        original_language={original_language}
                        runtime={runtime}
                    />
                </Info>
                <Year>
                    {releaseDate.substring(0, 4)}
                </Year>
                <MoreInfo
                    budget={budget}
                    production_countries={production_countries}
                    releaseDate={releaseDate}
                />
            </Container >
        )
    } else {
        return (
            <Container>
                <Name>
                    {title}
                </Name>
                <Year>
                    {releaseDate}
                </Year>
            </Container>
        )
    }

};