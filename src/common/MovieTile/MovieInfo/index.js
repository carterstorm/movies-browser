import { MoreInfo } from "./MoreInfo";
import {
    Container,
    Name,
    Year
} from "./styled";

export const MovieInfo = ({ title, releaseDate, original_language, runtime, budget, production_countries, moviePage, }) => {

    return (
        <Container moviePage={moviePage}>
            {title &&
                <Name moviePage={moviePage}>
                    {title}
                </Name>
            }
            {releaseDate &&
                <Year moviePage={moviePage}>
                    {releaseDate.substring(0, 4)}
                </Year>
            }
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