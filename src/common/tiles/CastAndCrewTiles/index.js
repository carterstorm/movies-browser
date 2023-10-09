import { useSelector } from "react-redux";
import { selectDetailsExtraData } from "../../../detailsSlice";
import { PersonTile } from "../../tile/PersonTile";

export const CastAndCrewTiles = () => {
    const { cast } = useSelector(selectDetailsExtraData);

    return (
        <>
            {cast.map(({
                id,
                character,
                name,
                profile_path
            }) => (
                <PersonTile
                    key={id}
                    id={id}
                    character={character}
                    name={name}
                    profile_path={profile_path}
                />
            ))}
        </>
    );
};