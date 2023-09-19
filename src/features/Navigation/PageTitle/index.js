import video from "../../../assets/svg/video.svg";
import { Logo, Title } from "./styled"

export const PageTitle = () => (
    <Title
        to="/movies">
        <Logo
            src={video}
            alt="Page title video logo"
        />
        movies browser
    </Title>
);