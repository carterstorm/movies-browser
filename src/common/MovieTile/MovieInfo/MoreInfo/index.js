import { More, MoreInfoElement, MoreInfoElementDescription, MoreInfoElementTitle } from "./styled";

export const MoreInfo = ({ budget, production_countries, releaseDate }) => (
    <More>
        <MoreInfoElement>
            <MoreInfoElementTitle>Budget:</MoreInfoElementTitle>
            <MoreInfoElementDescription>
                {budget ? `${budget} $` : 'No information'}
            </MoreInfoElementDescription>
        </MoreInfoElement>
        <MoreInfoElement>
            <MoreInfoElementTitle>Production countries:</MoreInfoElementTitle>
            {production_countries.map(({ name }) => (
                <MoreInfoElementDescription
                    key={name}
                >
                    {name}
                </MoreInfoElementDescription>
            ))}
        </MoreInfoElement>
        <MoreInfoElement>
            <MoreInfoElementTitle>Release date:</MoreInfoElementTitle>
            <MoreInfoElementDescription>
                {releaseDate}
            </MoreInfoElementDescription>
        </MoreInfoElement>
    </More>
);