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
    const setYear = releaseDate.substring(0, 4);
    return (
        <Container moviePage={moviePage}>
            {moviePage ? (
                <>
                    <Info>
                        <Name moviePage>
                            {title}
                        </Name>
                        <ExtraInfo
                            original_language={original_language}
                            runtime={runtime}
                        />
                    </Info>
                    <Year moviePage>
                        {setYear}
                    </Year>
                    <MoreInfo
                        budget={budget}
                        production_countries={production_countries}
                        releaseDate={releaseDate}
                    />
                </>
            ) : (
                <>
                    <Name>
                        {title}
                    </Name>
                    <Year>
                        {setYear}
                    </Year>
                </>
            )}
        </Container >
    )
};