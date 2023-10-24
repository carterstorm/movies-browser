import { changeDateToLocal } from "../../../../../changeDateToEn";
import {
    More,
    MoreInfoDataMobileContainer,
    MoreInfoDesktopContainer,
    MoreInfoElement,
    MoreInfoElementDescription,
    MoreInfoElementTitle
} from "./styled";

export const MoreInfo = ({ budget, production_countries, releaseDate, original_language, runtime }) => {
    const enDate = changeDateToLocal(releaseDate, "en");
    const localDate = changeDateToLocal(releaseDate);

    return (
        <More>
            <MoreInfoDesktopContainer>
                <MoreInfoElement>
                    <MoreInfoElementTitle>
                        Original language:
                    </MoreInfoElementTitle>
                    <MoreInfoElementDescription>
                        {original_language ? original_language.toUpperCase() : 'No information'}
                    </MoreInfoElementDescription>
                </MoreInfoElement>
                <MoreInfoElement>
                    <MoreInfoElementTitle>
                        Movie length:
                    </MoreInfoElementTitle>
                    <MoreInfoElementDescription>
                        {runtime ? `${runtime} min` : 'No information'}
                    </MoreInfoElementDescription>
                </MoreInfoElement>
                <MoreInfoElement>
                    <MoreInfoElementTitle>
                        Budget:
                    </MoreInfoElementTitle>
                    <MoreInfoElementDescription>
                        {budget ? `${budget}$` : 'No information'}
                    </MoreInfoElementDescription>
                </MoreInfoElement>
            </MoreInfoDesktopContainer>
            <MoreInfoElement>
                <MoreInfoElementTitle>
                    Production countries:
                </MoreInfoElementTitle>
                {production_countries.length !== 0 ? production_countries.map(({ name }) => (
                    <MoreInfoElementDescription
                        key={name}
                    >
                        {name}
                    </MoreInfoElementDescription>
                )) : `No information`}
            </MoreInfoElement>
            <MoreInfoElement>
                <MoreInfoElementTitle>
                    Release date:
                </MoreInfoElementTitle>
                <MoreInfoElementDescription mobile>
                    {releaseDate ? enDate : `No information`}
                </MoreInfoElementDescription>
                <MoreInfoDataMobileContainer>
                    {releaseDate ? localDate : `No information`}
                </MoreInfoDataMobileContainer>
            </MoreInfoElement>
        </More>
    )
};