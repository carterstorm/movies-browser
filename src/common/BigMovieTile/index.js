import { useSelector } from "react-redux";
import { selectMovieDetailsList } from "../../movieDetailsSlice";
import { MovieTile } from "../MovieTile";
import { BigMovieTileContainer } from "./styled";

export const BigMovieTile = () => {
    const {
        title,
        vote_average,
        vote_count,
        poster_path,
        release_date,
        genres,
    } = useSelector(selectMovieDetailsList);

    return (
        <BigMovieTileContainer>
            {genres && (
                <MovieTile
                    moviePage
                    genre_ids={genres.map((genre) => genre.id)}
                    title={title}
                    poster_path={poster_path}
                    release_date={release_date}
                    vote_average={vote_average}
                    vote_count={vote_count}
                />
            )}
        </BigMovieTileContainer>
    );
};