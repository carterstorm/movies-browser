import { PersonTile } from "../../tile/PersonTile";

export const MovieCastAndCrewTiles = ({ data }) => (
    <>
        {data.map(({
            id,
            name,
            job,
            profile_path,
            credit_id,
            character
        }) => (
            <PersonTile
                key={credit_id}
                id={id}
                name={name}
                job={job}
                character={character}
                profile_path={profile_path}
            />
        ))}
    </>
);