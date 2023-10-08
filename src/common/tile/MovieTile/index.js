import { GenreTags } from "./GenreTags";
import { Info } from "./Info";
import { Rating } from "../../Rating";
import no_movie_image from "../../../assets/svg/no_movie_image.svg";
import { MovieContainer, MovieDescription, MovieDetails, MovieOverview, MovieOverviewDesktopContainer, MovieOverviewMobileContainer, MoviePoster, MovieTileElement, MovieTileLink } from "./styled";

export const MovieTile = ({
    page,
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
            as={page ? "div" : null}
            page={page}
        >
            <MovieContainer>
                <MovieTileLink
                    as={page ? "div" : null}
                    page={page}
                    to={!page ? `/movies/movie/${id}` : null}
                >
                    <MoviePoster
                        src={poster_path ? `${posterImageLink}${poster_path}` : no_movie_image}
                        alt={poster_path ? `Poster: ${title}` : "Image not found"}
                        page={page}
                    />
                    <MovieDetails page={page}>
                        <MovieDescription page={page}>
                            <Info
                                page={page}
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
                            page={page}
                            vote_average={vote_average}
                            vote_count={vote_count}
                        />
                        {page ?
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
                    {page ?
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