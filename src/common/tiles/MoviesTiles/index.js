import { useSelector } from "react-redux";
import { selectList } from "../../../listSlice";
import { Tile } from "../../tile/TileElement";

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
                <Tile
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
