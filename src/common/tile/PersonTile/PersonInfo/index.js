import { Info, MorePersonInfoDescription, MorePersonInfoElement, MorePersonInfoElementTitle } from "./styled";

export const PersonInfo = ({ birthday, place_of_birth, deathday }) => {
    return (
        <Info>
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
        </Info>
    );
};