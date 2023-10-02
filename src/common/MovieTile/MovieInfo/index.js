import { MoreInfo } from "./MoreInfo";
import {
    Container,
    Name,
    Year
} from "./styled";

export const MovieInfo = ({ title, releaseDate, original_language, runtime, budget, production_countries, moviePage, }) => {
    const setYear = releaseDate.substring(0, 4);

    return (
        <Container moviePage={moviePage}>
            <Name moviePage={moviePage}>
                {title}
            </Name>
            <Year moviePage={moviePage}>
                {setYear}
            </Year>
            {moviePage &&
                (
                    <MoreInfo
                        budget={budget}
                        production_countries={production_countries}
                        releaseDate={releaseDate}
                        original_language={original_language}
                        runtime={runtime}
                    />
                )}
        </Container >
    )
};