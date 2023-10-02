import { GenreTags } from "./GenreTags";
import { MovieInfo } from "./MovieInfo";
import { Rating } from "../Rating";
import {
    Container,
    Description,
    MovieDetails,
    Overview,
    OverviewDesktopContainer,
    OverviewMobileContainer,
    Poster,
    Tile,
    TileLink
} from "./styled";

export const MovieTile = ({
    moviePage,
    id,
    genre_ids,
    title,
    poster_path,
    release_date,
    vote_average,
    vote_count,
    original_language,
    runtime,
    budget,
    production_countries,
    overview,
}) => {
    const posterImageLink = `https://image.tmdb.org/t/p/w342`;
    return (
        <Tile
            key={id}
            as={moviePage ? "div" : null}
            moviePage={moviePage}
        >
            <Container>
                <TileLink
                    as={moviePage ? "div" : null}
                    moviePage={moviePage}
                    to={!moviePage ? `/movies/movie/${id}` : null}
                >
                    <Poster
                        src={`${posterImageLink}${poster_path}`}
                        alt={`Poster: ${title}`}
                        moviePage={moviePage}
                    />
                    <MovieDetails moviePage={moviePage}>
                        <Description moviePage={moviePage}>
                            <MovieInfo
                                moviePage={moviePage}
                                title={title}
                                releaseDate={release_date}
                                original_language={original_language}
                                runtime={runtime}
                                budget={budget}
                                production_countries={production_countries}
                            />
                            <GenreTags genre={genre_ids} />
                        </Description>
                        <Rating
                            moviePage={moviePage}
                            vote_average={vote_average}
                            vote_count={vote_count}
                        />
                        {moviePage ?
                            (
                                <OverviewDesktopContainer>
                                    <Overview>
                                        {overview}
                                    </Overview>
                                </OverviewDesktopContainer>)
                            :
                            null}
                    </MovieDetails>
                </TileLink>
                <OverviewMobileContainer>
                    {moviePage ?
                        (<Overview mobile>
                            {overview}
                        </Overview>)
                        :
                        null}
                </OverviewMobileContainer>
            </Container>
        </Tile>
    )
};