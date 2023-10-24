import danger_icon from "../../assets/svg/danger_icon.svg";
import {
    ErrorButton,
    ErrorHeading,
    ErrorImage,
    ErrorInformation,
    ErrorParagraph,
    ErrorWrapper
} from "./styled";

export const Error = () => (
    <ErrorWrapper>
        <ErrorImage src={danger_icon} alt="Error icon" />
        <ErrorInformation>
            <ErrorHeading>Ooops! Something went wrong...</ErrorHeading>
            <ErrorParagraph>Please check your network connection and try again</ErrorParagraph>
            <ErrorButton>Back to home page</ErrorButton>
        </ErrorInformation>
    </ErrorWrapper>
);