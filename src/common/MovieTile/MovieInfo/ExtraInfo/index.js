import {
    ExtraInfoContainer,
    InfoContainer,
    InfoDescription,
    InfoTitle
} from "./styled";

export const ExtraInfo = ({ original_language, runtime }) => {
    return (
        <ExtraInfoContainer>
            <InfoContainer>
                <InfoTitle>
                    Original language:
                </InfoTitle>
                <InfoDescription
                    upperCase>
                    {original_language}
                </InfoDescription>
            </InfoContainer>
            <InfoContainer>
                <InfoTitle>
                    Movie length:
                </InfoTitle>
                <InfoDescription>
                    {runtime} min
                </InfoDescription>
            </InfoContainer>
        </ExtraInfoContainer>
    );
}