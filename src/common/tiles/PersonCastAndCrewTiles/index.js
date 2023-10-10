import { MovieTile } from "../../tile/MovieTile";

export const PersonCastAndCrewTiles = ({ data }) => (
    <>
        {data.map(({
            id,
            credit_id,
            genre_ids,
            title,
            poster_path,
            release_date,
            vote_average,
            vote_count,
        }) => (
            <MovieTile
                key={credit_id}
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
);