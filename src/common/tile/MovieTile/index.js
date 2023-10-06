import { GenreTags } from "./GenreTags";
import { MovieInfo } from "./MovieInfo";
import { Rating } from "../../Rating";
import no_movie_image from "../../../assets/svg/no_movie_image.svg";
import {
    MovieDetails,
    MovieTileElement,
    MovieContainer,
    MovieTileLink,
    MoviePoster,
    MovieDescription,
    MovieOverviewDesktopContainer,
    MovieOverview,
    MovieOverviewMobileContainer
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
        <MovieTileElement
            key={id}
            as={moviePage ? "div" : null}
            moviePage={moviePage}
        >
            <MovieContainer>
                <MovieTileLink
                    as={moviePage ? "div" : null}
                    moviePage={moviePage}
                    to={!moviePage ? `/movies/movie/${id}` : null}
                >
                    <MoviePoster
                        src={poster_path ? `${posterImageLink}${poster_path}` : no_movie_image}
                        alt={poster_path ? `Poster: ${title}` : "Image not found"}
                        moviePage={moviePage}
                    />
                    <MovieDetails moviePage={moviePage}>
                        <MovieDescription moviePage={moviePage}>
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
                        </MovieDescription>
                        <Rating
                            moviePage={moviePage}
                            vote_average={vote_average}
                            vote_count={vote_count}
                        />
                        {moviePage ?
                            (
                                <MovieOverviewDesktopContainer>
                                    <MovieOverview>
                                        {overview}
                                    </MovieOverview>
                                </MovieOverviewDesktopContainer>)
                            :
                            null}
                    </MovieDetails>
                </MovieTileLink>
                <MovieOverviewMobileContainer>
                    {moviePage ?
                        (<MovieOverview mobile>
                            {overview}
                        </MovieOverview>)
                        :
                        null}
                </MovieOverviewMobileContainer>
            </MovieContainer>
        </MovieTileElement>
    )
};