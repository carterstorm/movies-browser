import {
    More,
    MoreInfoDesktopContainer,
    MoreInfoElement,
    MoreInfoElementDescription,
    MoreInfoElementTitle
} from "./styled";

export const MoreInfo = ({ budget, production_countries, releaseDate, original_language, runtime }) => {
    const date = new Date(releaseDate);

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
                <MoreInfoElementDescription>
                    {releaseDate ? date.toLocaleDateString("en") : `No information`}
                </MoreInfoElementDescription>
            </MoreInfoElement>
        </More>
    )
};