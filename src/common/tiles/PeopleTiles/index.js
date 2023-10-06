import { useSelector } from "react-redux";
import { selectList } from "../../../listSlice";
import { PersonTile } from "../../tile/PersonTile";

export const PeopleTiles = () => {
    const popularPeople = useSelector(selectList);

    return (
        <>
            {popularPeople.map(({
                id,
                name,
                profile_path
            }) => (
                <PersonTile
                    key={id}
                    id={id}
                    name={name}
                    profile_path={profile_path}
                />
            ))}
        </>
    )
};
