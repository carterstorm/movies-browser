import { MoreInfo } from "./MoreInfo";
import {
    Container,
    Name,
    Year
} from "./styled";

export const Info = ({ title, releaseDate, original_language, runtime, budget, production_countries, page }) => {

    return (
        <Container page={page}>
            {title &&
                <Name page={page}>
                    {title}
                </Name>
            }
            {releaseDate &&
                <Year page={page}>
                    {releaseDate.substring(0, 4)}
                </Year>
            }
            {page &&
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