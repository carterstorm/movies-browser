import { useSelector } from "react-redux";
import { selectList } from "../../../../listSlice";

export const PeopleTiles = () => {
    const popularPeople = useSelector(selectList);

    return (
        <>
            {popularPeople.map(({
                id,
                name,
                profile_path
            }) => (
                <div key={id}></div>
            ))}
        </>
    )
};
