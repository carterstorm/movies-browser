import no_person_image from "../../../assets/svg/no_person_image.svg";
import {
    FloatContainer,
    MorePersonInfoDescription,
    MorePersonInfoElement,
    MorePersonInfoElementTitle,
    PersonContainer,
    PersonDetails,
    PersonInfo,
    PersonName,
    PersonOverview,
    PersonPoster,
    PersonTileElement,
    PersonTileLink
} from "./styled";

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
                    <FloatContainer>
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
                        <PersonDetails page={page}>
                            <PersonName
                                page={page}>
                                {name}
                            </PersonName>
                            {page && (
                                <PersonInfo>
                                    <MorePersonInfoElement>
                                        <MorePersonInfoElementTitle>
                                            Date of birth:
                                        </MorePersonInfoElementTitle>
                                        <MorePersonInfoDescription>
                                            {birthday}
                                        </MorePersonInfoDescription>
                                    </MorePersonInfoElement>
                                    <MorePersonInfoElement>
                                        <MorePersonInfoElementTitle>
                                            Place of birth:
                                        </MorePersonInfoElementTitle>
                                        <MorePersonInfoDescription>
                                            {place_of_birth}
                                        </MorePersonInfoDescription>
                                    </MorePersonInfoElement>
                                    {deathday && (
                                        <MorePersonInfoElement>
                                            <MorePersonInfoElementTitle>
                                                Date of death:
                                            </MorePersonInfoElementTitle>
                                            <MorePersonInfoDescription>
                                                {deathday}
                                            </MorePersonInfoDescription>
                                        </MorePersonInfoElement>
                                    )}
                                </PersonInfo>
                            )}
                        </PersonDetails>
                        {page && (
                            <PersonOverview>
                                {biography}
                            </PersonOverview>
                        )}
                    </FloatContainer>
                </PersonTileLink>
            </PersonContainer>
        </PersonTileElement>
    );
};