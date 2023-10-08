import { PersonContainer, PersonDetails, PersonName, PersonPoster, PersonTileElement, PersonTileLink } from "./styled";
import no_person_image from "../../../assets/svg/no_person_image.svg";
export const PersonTile = ({ id, page, name, profile_path, birthday, deathday, place_of_birth, biography }) => {
    const posterImageLink = `https://image.tmdb.org/t/p/w185`;
    return (
        <PersonTileElement>
            <PersonContainer>
                <PersonTileLink to={`/people/person/${id}`}>
                    <PersonPoster
                        page
                        src={profile_path ? `${posterImageLink}${profile_path}` : no_person_image}
                        alt={profile_path ? `${name} photography` : "Image not found"}
                    />
                    <PersonDetails>
                        <PersonName>{name}</PersonName>
                    </PersonDetails>
                </PersonTileLink>
            </PersonContainer>
        </PersonTileElement>
    );
};