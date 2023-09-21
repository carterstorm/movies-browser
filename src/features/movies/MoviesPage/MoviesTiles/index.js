import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPopularMovies, fetchPopularMovies } from "../moviesSlice";
import { Rating } from "./Rating";
import { Tags } from "./Tags";

import {
    Description,
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

    useEffect(() => {
        dispatch(fetchPopularMovies());
    }, [dispatch])

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
                            <Description>
                                <MovieInfo
                                    title={title}
                                    releaseDate={release_date}
                                />
                                <Tags />
                            </Description>
                            <Rating
                                voteAverage={vote_average}
                                voteCount={vote_count}
                            />
                        </TileLink>
                    </Tile>
                ))}
            </Tiles>
        </TilesSection>
    );
};