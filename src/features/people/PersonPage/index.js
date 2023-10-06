import { useParams } from "react-router-dom";

export const PersonPage = () => {
    const { id } = useParams();
    return (
        <>{id}</>
    );
};