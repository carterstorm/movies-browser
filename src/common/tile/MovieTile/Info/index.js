import { MoreInfo } from "./MoreInfo";
import {
    CharacterJob,
    Container,
    Name,
    Year
} from "./styled";

export const Info = ({
    title,
    releaseDate,
    original_language,
    runtime,
    budget,
    production_countries,
    page,
    character,
    job
}) => (
    <Container page={page}>
        <div>
            {title ?
                (<Name page={page}>
                    {title}
                </Name>)
                : null
            }
            {releaseDate ?
                (<Year page={page}>
                    {releaseDate ? releaseDate.substring(0, 4) : null}
                </Year>)
                : null
            }
        </div>
        {character || job ?
            <CharacterJob>
                {character ? `Character: ${character}` : null}
                {job ? `Work as: ${job}` : null}
            </CharacterJob> : null}
        {page ?
            (<MoreInfo
                budget={budget}
                production_countries={production_countries}
                releaseDate={releaseDate}
                original_language={original_language}
                runtime={runtime}
            />)
            : null}
    </Container >
)