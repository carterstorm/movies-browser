import { Tiles, TilesSectionElement } from "./styled";

export const TilesSection = ({ children }) => {
    return (
        <TilesSectionElement>
            <Tiles>
                {children}
            </Tiles>
        </TilesSectionElement>
    );
};