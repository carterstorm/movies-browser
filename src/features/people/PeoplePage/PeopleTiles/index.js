import { useSelector } from "react-redux";
import { selectList } from "../../../../listSlice";
import { PersonTile } from "../../../../common/PersonTile";

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
                    name={name}
                    profile_path={profile_path}
                />
            ))}
        </>
    )
};
