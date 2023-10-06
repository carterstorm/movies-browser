import { useSelector } from "react-redux";
import { selectPersonDetailsList } from "../../../../personDetailsSlice";
import { PersonTile } from "../../PersonTile";

export const BigPersonTile = () => {
    const {
        name,
        birthday,
        deathday,
        place_of_birth,
        profile_path,
        biography
    } = useSelector(selectPersonDetailsList);

    return (
        <PersonTile
            name={name}
            birthday={birthday}
            deathday={deathday}
            place_of_birth={place_of_birth}
            profile_path={profile_path}
            biography={biography}
        />
    );
};