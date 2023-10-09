import { useSelector } from "react-redux";
import { selectDetailsExtraData } from "../../../detailsSlice";
import { PersonTile } from "../../tile/PersonTile";

export const CrewTiles = () => {
    const { crew } = useSelector(selectDetailsExtraData);

    return (
        <>
            {crew.map(({
                id,
                name,
                job,
                profile_path
            }) => (
                <PersonTile
                    key={id}
                    id={id}
                    name={name}
                    job={job}
                    profile_path={profile_path}
                />
            ))}
        </>
    );
};