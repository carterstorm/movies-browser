import { Image, NoImageContainer } from "./styled";

export const ImageNotFound = ({ image, name }) => (
    <NoImageContainer>
        <Image
            src={image}
            alt={`Photo not found ${name}`}
        />
    </NoImageContainer>
);