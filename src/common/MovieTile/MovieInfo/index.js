import {
    Container,
    ExtraInfo,
    Info,
    InfoContainer,
    InfoDesctiption,
    InfoTitle,
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
                    <ExtraInfo>
                        <InfoContainer>
                            <InfoTitle>Orginal language:</InfoTitle>
                            <InfoDesctiption>{original_language}</InfoDesctiption>
                        </InfoContainer>
                        <InfoContainer>
                            <InfoTitle>Movie length:</InfoTitle>
                            <InfoDesctiption>{runtime} min</InfoDesctiption>
                        </InfoContainer>
                    </ExtraInfo>
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