import { GenreTags } from "../GenreTags";
import { MovieInfo } from "./MovieInfo";
import { Rating } from "../Rating";
import {
    Description,
    MovieDetails,
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
    vote_count
}) => {
    const posterImageLink = `https://image.tmdb.org/t/p/w342`;
    if (moviePage) {
        return (
            <Tile
                key={id}
                as="div"
                moviePage
            >
                <TileLink
                    moviePage
                    as="div"
                >
                    <Poster
                        src={`${posterImageLink}${poster_path}`}
                        alt={`Poster: ${title}`}
                        moviePage
                    />
                    <MovieDetails
                        moviePage
                    >
                        <Description
                            moviePage
                        >
                            <MovieInfo
                                moviePage
                                title={title}
                                releaseDate={release_date.substring(0, 4)}
                            />
                            <GenreTags
                                genre={genre_ids}
                            />
                        </Description>
                        <Rating
                            vote_average={vote_average}
                            vote_count={vote_count}
                        />
                    </MovieDetails>
                </TileLink>
            </Tile>
        )
    } else {
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
                        <Rating
                            vote_average={vote_average}
                            vote_count={vote_count}
                        />
                    </MovieDetails>
                </TileLink>
            </Tile>
        )
    }
};