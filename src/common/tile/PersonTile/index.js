import { PersonContainer, PersonDetails, PersonName, PersonPoster, PersonTileElement, PersonTileLink } from "./styled";
import no_person_image from "../../../assets/svg/no_person_image.svg";
export const PersonTile = ({ id, page, name, profile_path, birthday, deathday, place_of_birth, biography }) => {
    const bigPersonImageLink = `https://image.tmdb.org/t/p/h632`;
    const smallPersonImageLink = `https://image.tmdb.org/t/p/w185`;

    return (
        <PersonTileElement
            as={page ? "div" : null}
            page={page}
        >
            <PersonContainer>
                <PersonTileLink
                    as={page ? "div" : null}
                    page={page}
                    to={`/people/person/${id}`}>
                    {page ?
                        (<PersonPoster
                            page
                            src={profile_path ? `${bigPersonImageLink}${profile_path}` : no_person_image}
                            alt={profile_path ? `${name} photography` : "Image not found"} />)
                        :
                        (<PersonPoster
                            src={profile_path ? `${smallPersonImageLink}${profile_path}` : no_person_image}
                            alt={profile_path ? `${name} photography` : "Image not found"}
                        />)}
                    <PersonDetails>
                        <PersonName>{name}</PersonName>
                    </PersonDetails>
                </PersonTileLink>
            </PersonContainer>
        </PersonTileElement>
    );
};