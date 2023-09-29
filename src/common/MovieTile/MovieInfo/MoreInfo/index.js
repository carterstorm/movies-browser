import { More, MoreInfoContainer, MoreInfoElementDescription, MoreInfoElementTitle } from "./styled";

export const MoreInfo = ({ budget, production_countries, releaseDate }) => (
    <More>
        <MoreInfoContainer>
            <MoreInfoElementTitle>Budget:</MoreInfoElementTitle>
            <MoreInfoElementDescription>
                {budget ? `${budget} $` : 'No information'}
            </MoreInfoElementDescription>
        </MoreInfoContainer>
        <MoreInfoContainer>
            <MoreInfoElementTitle>Production countries:</MoreInfoElementTitle>
            {production_countries.map(({ name }) => (
                <MoreInfoElementDescription
                    key={name}
                >
                    {name}
                </MoreInfoElementDescription>
            ))}
        </MoreInfoContainer>
        <MoreInfoContainer>
            <MoreInfoElementTitle>Release date:</MoreInfoElementTitle>
            <MoreInfoElementDescription>
                {releaseDate}
            </MoreInfoElementDescription>
        </MoreInfoContainer>
    </More>
);