import { GenreTags } from "./GenreTags";
import { MovieInfo } from "./MovieInfo";
import { MovieStatistics } from "../MovieStatistics";
import {
    Description,
    MovieDetails,
    Poster,
    Tile,
    TileLink
} from "./styled";

export const MovieTile = ({
    id,
    genre_ids,
    title,
    poster_path,
    release_date,
    vote_average,
    vote_count
}) => {
    const posterImageLink = `https://image.tmdb.org/t/p/w342`;

    return (
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
                    <MovieStatistics
                        vote_average={vote_average}
                        vote_count={vote_count}
                    />
                </MovieDetails>
            </TileLink>
        </Tile>
    )
};