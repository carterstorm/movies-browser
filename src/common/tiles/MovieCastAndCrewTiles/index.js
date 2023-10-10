import { PersonTile } from "../../tile/PersonTile";

export const MovieCastAndCrewTiles = ({ data }) => (
    <>
        {data.map(({
            id,
            name,
            job,
            profile_path,
            credit_id
        }) => (
            <PersonTile
                key={credit_id}
                id={id}
                name={name}
                job={job}
                profile_path={profile_path}
            />
        ))}
    </>
);