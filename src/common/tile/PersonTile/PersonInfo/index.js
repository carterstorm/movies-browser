import { changeDateToLocal } from "../../../../changeDateToEn";
import { Info, MorePersonInfoDescription, MorePersonInfoElement, MorePersonInfoElementTitle } from "./styled";

export const PersonInfo = ({ birthday, place_of_birth, deathday }) => {
    const birthDate = changeDateToLocal(birthday, "en");
    const deathDate = changeDateToLocal(deathday, "en");

    return (
        <Info>
            {birthday && (
                <MorePersonInfoElement>
                    <MorePersonInfoElementTitle>
                        Date of birth:
                    </MorePersonInfoElementTitle>
                    <MorePersonInfoDescription>
                        {birthDate}
                    </MorePersonInfoDescription>
                </MorePersonInfoElement>
            )}
            {place_of_birth && (
                <MorePersonInfoElement>
                    <MorePersonInfoElementTitle>
                        Place of birth:
                    </MorePersonInfoElementTitle>
                    <MorePersonInfoDescription>
                        {place_of_birth}
                    </MorePersonInfoDescription>
                </MorePersonInfoElement>
            )}
            {deathday && (
                <MorePersonInfoElement>
                    <MorePersonInfoElementTitle>
                        Date of death:
                    </MorePersonInfoElementTitle>
                    <MorePersonInfoDescription>
                        {deathDate}
                    </MorePersonInfoDescription>
                </MorePersonInfoElement>
            )}
        </Info>
    );
};