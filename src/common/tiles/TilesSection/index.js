import { Tiles, TilesSectionElement } from "./styled";

export const TilesSection = ({ children, people }) => {
    return (
        <TilesSectionElement>
            <Tiles people={people}>
                {children}
            </Tiles>
        </TilesSectionElement>
    );
};