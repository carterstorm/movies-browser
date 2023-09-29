import { ExtraInfo } from "./ExtraInfo";
import {
    Container,
    Info,
    MoreInfo,
    MoreInfoContainer,
    MoreInfoElementDescription,
    MoreInfoElementTitle,
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
                <MoreInfo>
                    <MoreInfoContainer>
                        <MoreInfoElementTitle>Budget:</MoreInfoElementTitle>
                        <MoreInfoElementDescription>
                            {budget ? `${budget} $` : 'No information'}
                        </MoreInfoElementDescription>
                    </MoreInfoContainer>
                    <MoreInfoContainer>
                        <MoreInfoElementTitle>Production countries:</MoreInfoElementTitle>
                        {production_countries.map(({ name }) => (
                            <MoreInfoElementDescription
                                key={name}
                            >
                                {name}
                            </MoreInfoElementDescription>
                        ))}
                    </MoreInfoContainer>
                    <MoreInfoContainer>
                        <MoreInfoElementTitle>Release date:</MoreInfoElementTitle>
                        <MoreInfoElementDescription>
                            {releaseDate}
                        </MoreInfoElementDescription>
                    </MoreInfoContainer>
                </MoreInfo>
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