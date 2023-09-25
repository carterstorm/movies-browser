import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPopularMovies, fetchPopularMovies, selectPage } from "../moviesSlice";
import { Rating } from "./Rating";
import { Tags } from "./Tags";

import {
    Description,
    MovieDetails,
    Poster,
    Tile,
    TileLink,
    Tiles,
    TilesSection,
} from "./styled";
import { MovieInfo } from "./MovieInfo";

export const MoviesTiles = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(selectPopularMovies);
    const posterImageLink = `https://image.tmdb.org/t/p/w342`;
    const page = useSelector(selectPage);

    useEffect(() => {
        dispatch(fetchPopularMovies());
    }, [dispatch, page])

    return (
        <TilesSection>
            <Tiles>
                {popularMovies.map(({ id, title, poster_path, release_date, vote_average, vote_count }) => (
                    <Tile key={id}>
                        <TileLink to="#">
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
                                    <Tags />
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