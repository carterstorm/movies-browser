import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Checker } from "../../../common/Checker";
import { BigTileElement } from "../../../common/tile/BigTileElement";
import { BigPersonTile } from "../../../common/tile/BigTileElement/BigPersonTile";
import { fetchDetails, resetDetailsState, selectAreDetailsError, selectAreDetailsLoading, selectDetailsExtraData } from "../../../detailsSlice";
import { Main } from "../../../common/Main";
import { TilesSection } from "../../../common/tiles/TilesSection";
import { Heading } from "../../../common/Heading";
import { PersonCastAndCrewTiles } from "../../../common/tiles/PersonCastAndCrewTiles";

export const PersonPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { cast, crew } = useSelector(selectDetailsExtraData);
    const areLoading = useSelector(selectAreDetailsLoading);
    const areError = useSelector(selectAreDetailsError);

    useEffect(() => {
        dispatch(fetchDetails({ id, type: "person" }));

        return () => {
            dispatch(resetDetailsState());
        };
    }, [dispatch, id]);

    return (
        <Checker
            areLoading={areLoading}
            areError={areError}
        >
            <Main>
                <BigTileElement
                    children={<BigPersonTile />}
                />
                <Heading title={`Movie - cast`} />
                <TilesSection
                    children=
                    {
                        <PersonCastAndCrewTiles
                            data={cast}
                        />
                    }
                />
                <Heading title={"Movies - crew"} />
                <TilesSection
                    children=
                    {
                        <PersonCastAndCrewTiles
                            data={crew}
                        />
                    }
                />
            </Main>
        </Checker >
    );
};