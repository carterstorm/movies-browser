import no_person_image from "../../../assets/svg/no_person_image.svg";
import { bigPersonTileImageLink, smallPersonTileImageLink } from "../../commonValues";
import { PersonInfo } from "./PersonInfo";
import { PersonOverview } from "./PersonInfo/styled";
import {
    FloatContainer,
    PersonContainer,
    PersonDetails,
    PersonName,
    PersonPoster,
    PersonRole,
    PersonTileElement,
    PersonTileLink
} from "./styled";

export const PersonTile = ({
    id,
    page,
    name,
    profile_path,
    birthday,
    deathday,
    place_of_birth,
    biography,
    character,
    job
}) => {
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
                    <FloatContainer>
                        {page ?
                            (<PersonPoster
                                page
                                src={profile_path ? `${bigPersonTileImageLink}${profile_path}` : no_person_image}
                                alt={profile_path ? `${name} photography` : "Image not found"} />)
                            :
                            (<PersonPoster
                                src={profile_path ? `${smallPersonTileImageLink}${profile_path}` : no_person_image}
                                alt={profile_path ? `${name} photography` : "Image not found"}
                            />)}
                        <PersonDetails
                            page={page}
                            people
                        >
                            <PersonName
                                page={page}>
                                {name}
                            </PersonName>
                            <PersonRole>
                                {character || job}
                            </PersonRole>
                            {page ? (
                                <PersonInfo
                                    birthday={birthday}
                                    place_of_birth={place_of_birth}
                                    deathday={deathday}
                                />
                            ) : null}
                        </PersonDetails>
                        {page ? (
                            <PersonOverview>
                                {biography}
                            </PersonOverview>
                        ) : null}
                    </FloatContainer>
                </PersonTileLink>
            </PersonContainer>
        </PersonTileElement>
    );
};