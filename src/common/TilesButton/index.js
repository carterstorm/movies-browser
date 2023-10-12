import { useRef } from "react";
import { Button, Wrapper } from "./styled";

export const TilesButton = ({
    castCrew,
    numberOfDisplayedTiles,
    setNumberOfDisplayedTiles,
    numberOfDisplayedCastCrew,
    lastElement
}) => {
    const buttonRef = useRef(null);

    const handleClick = () => {
        if (castCrew.length > numberOfDisplayedTiles) {
            setNumberOfDisplayedTiles(castCrew.length);
            buttonRef.current.innerText = "Hide";
        } else if (castCrew.length <= numberOfDisplayedTiles) {
            setNumberOfDisplayedTiles(numberOfDisplayedCastCrew);
            buttonRef.current.innerText = "Show all";
        };
    };

    return (
        <Wrapper>
            <Button
                ref={buttonRef}
                onClick={handleClick}>
                Show all
            </Button>
        </Wrapper>
    );
};