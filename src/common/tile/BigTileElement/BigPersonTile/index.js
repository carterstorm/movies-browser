import { useSelector } from "react-redux";
import { PersonTile } from "../../PersonTile";
import { selectDetailsItemData } from "../../../../detailsSlice";

export const BigPersonTile = () => {
    const {
        name,
        birthday,
        deathday,
        place_of_birth,
        profile_path,
        biography
    } = useSelector(selectDetailsItemData);

    return (
        <PersonTile
            page
            name={name}
            birthday={birthday}
            deathday={deathday}
            place_of_birth={place_of_birth}
            profile_path={profile_path}
            biography={biography}
        />
    );
};