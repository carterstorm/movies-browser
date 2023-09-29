import {
    ExtraInfoContainer,
    InfoContainer,
    InfoDesctiption,
    InfoTitle
} from "./styled";

export const ExtraInfo = ({ original_language, runtime }) => {
    return (
        <ExtraInfoContainer>
            <InfoContainer>
                <InfoTitle>
                    Orginal language:
                </InfoTitle>
                <InfoDesctiption
                    upperCase>
                    {original_language}
                </InfoDesctiption>
            </InfoContainer>
            <InfoContainer>
                <InfoTitle>
                    Movie length:
                </InfoTitle>
                <InfoDesctiption>
                    {runtime} min
                </InfoDesctiption>
            </InfoContainer>
        </ExtraInfoContainer>
    );
}