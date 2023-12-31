import { useSelector } from "react-redux";
import { MovieTile } from "../../MovieTile";
import { selectDetailsItemData } from "../../../../detailsSlice";

export const BigMovieTile = () => {
    const {
        title,
        vote_average,
        vote_count,
        poster_path,
        release_date,
        genres,
        original_language,
        runtime,
        budget,
        production_countries,
        overview
    } = useSelector(selectDetailsItemData);

    return (
        <>
            {genres && (
                <MovieTile
                    page
                    genre_ids={genres.map((genre) => genre.id)}
                    title={title}
                    poster_path={poster_path}
                    release_date={release_date}
                    vote_average={vote_average}
                    vote_count={vote_count}
                    original_language={original_language}
                    runtime={runtime}
                    budget={budget}
                    production_countries={production_countries}
                    overview={overview}
                />
            )}
        </>
    );
};