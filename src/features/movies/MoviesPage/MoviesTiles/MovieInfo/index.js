import {
    MovieInfoContainer,
    MovieName,
    MovieYear
} from "./styled";

export const MovieInfo = ({ title, releaseDate }) => (
    <MovieInfoContainer>
        <MovieName>
            {title}
        </MovieName>
        <MovieYear>
            {releaseDate}
        </MovieYear>
    </MovieInfoContainer>
);