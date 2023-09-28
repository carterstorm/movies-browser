import {
    MovieInfoContainer,
    MovieName,
    MovieYear
} from "./styled";

export const MovieInfo = ({
    title,
    releaseDate,
    moviePage
}) => {
    if (moviePage) {
        return (
            <MovieInfoContainer
                moviePage
            >
                <MovieName>
                    {title}
                </MovieName>
                <MovieYear>
                    {releaseDate}
                </MovieYear>
            </MovieInfoContainer>
        )
    } else {
        return (
            <MovieInfoContainer>
                <MovieName>
                    {title}
                </MovieName>
                <MovieYear>
                    {releaseDate}
                </MovieYear>
            </MovieInfoContainer>
        )
    }

};