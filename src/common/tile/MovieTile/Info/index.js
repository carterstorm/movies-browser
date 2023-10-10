import { MoreInfo } from "./MoreInfo";
import {
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
    page
}) => (
    <Container page={page}>
        {title ?
            (<Name page={page}>
                {title}
            </Name>)
            : null
        }
        {releaseDate ?
            (<Year page={page}>
                {releaseDate.substring(0, 4)}
            </Year>)
            : null
        }
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