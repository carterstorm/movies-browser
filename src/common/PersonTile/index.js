import { Image, NoImage, PersonContainer, PersonDetails, PersonName, PersonPoster, PersonTileElement, PersonTileLink } from "./styled";
import noPersonImage from "../../assets/svg/noPersonImage.svg";
export const PersonTile = ({ name, profile_path }) => {
    const posterImageLink = `https://image.tmdb.org/t/p/w185`;

    return (
        <PersonTileElement>
            <PersonContainer>
                <PersonTileLink to="#">
                    {profile_path ?
                        <PersonPoster
                            src={`${posterImageLink}${profile_path}`}
                            alt={`${name} photography`}
                        />
                        :
                        (<NoImage>
                            <Image
                                src={noPersonImage}
                                alt={`Photo not found ${name}`}
                            />
                        </NoImage>)
                    }
                    <PersonDetails>
                        <PersonName>{name}</PersonName>
                    </PersonDetails>
                </PersonTileLink>
            </PersonContainer>
        </PersonTileElement>
    );
};