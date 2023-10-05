import { useSelector } from "react-redux";
import { MovieTile } from "../../../../common/MovieTile";
import { selectList } from "../../../../listSlice";

export const MoviesTiles = () => {
    const popularMovies = useSelector(selectList);

    return (
        <>
            {popularMovies.map(({
                id,
                genre_ids,
                title,
                poster_path,
                release_date,
                vote_average,
                vote_count,
            }) => (
                <MovieTile
                    key={id}
                    id={id}
                    genre_ids={genre_ids}
                    title={title}
                    poster_path={poster_path}
                    release_date={release_date}
                    vote_average={vote_average}
                    vote_count={vote_count}
                />
            ))}
        </>
    )
};
