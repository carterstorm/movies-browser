import { Rating } from "./Rating";
import { GenreTags } from "./GenreTags";
import { MovieInfo } from "./MovieInfo";

import {
    Description,
    MovieDetails,
    Poster,
    Tile,
    TileLink,
    Tiles,
    TilesSection,
} from "./styled";


export const MoviesTiles = ({ popularMovies }) => {
    const posterImageLink = `https://image.tmdb.org/t/p/w342`;

    return (
        <TilesSection>
            <Tiles>
                {popularMovies.map(({
                    id,
                    genre_ids,
                    title,
                    poster_path,
                    release_date,
                    vote_average,
                    vote_count,
                }) => (
                    <Tile key={id}>
                        <TileLink to={`/movies/movie/${id}`}>
                            <Poster
                                src={`${posterImageLink}${poster_path}`}
                                alt={`Poster: ${title}`}
                            />
                            <MovieDetails>
                                <Description>
                                    <MovieInfo
                                        title={title}
                                        releaseDate={release_date.substring(0, 4)}
                                    />
                                    <GenreTags
                                        genre={genre_ids}
                                    />
                                </Description>
                                <Rating
                                    voteAverage={vote_average}
                                    voteCount={vote_count}
                                />
                            </MovieDetails>
                        </TileLink>
                    </Tile>
                ))}
            </Tiles>
        </TilesSection>
    );
};