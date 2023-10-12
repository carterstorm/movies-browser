import { useRef } from "react";
import { Button } from "./styled";

export const TilesButton = ({ castCrew, numberOfDisplayedTiles, setNumberOfDisplayedTiles }) => {
    const buttonRef = useRef(null);

    const handleClick = () => {
        if (castCrew.length > numberOfDisplayedTiles) {
            setNumberOfDisplayedTiles(castCrew.length);
            buttonRef.current.innerText = "Hide";
        } else if (castCrew.length <= numberOfDisplayedTiles) {
            setNumberOfDisplayedTiles(12);
            buttonRef.current.innerText = "Show all";
        };
    };

    return (
        <Button
            ref={buttonRef}
            onClick={() => handleClick()}>
            Show all
        </Button>
    );
};