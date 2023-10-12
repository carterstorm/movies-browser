import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Checker } from "../../../common/Checker";
import { BigTileElement } from "../../../common/tile/BigTileElement";
import { BigPersonTile } from "../../../common/tile/BigTileElement/BigPersonTile";
import { Main } from "../../../common/Main";
import { TilesSection } from "../../../common/tiles/TilesSection";
import { Heading } from "../../../common/Heading";
import { PersonCastAndCrewTiles } from "../../../common/tiles/PersonCastAndCrewTiles";
import {
    fetchDetails,
    resetDetailsState,
    selectAreDetailsError,
    selectAreDetailsLoading,
    selectDetailsExtraData
} from "../../../detailsSlice";
import { getNumberOfCast, getNumberOfCrew } from "../../../common/commonFunction";
import { numberOfDisplayedMovieCastCrew } from "../../../common/commonValues";
import { TilesButton } from "../../../common/TilesButton";

export const PersonPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { cast, crew } = useSelector(selectDetailsExtraData);
    const areLoading = useSelector(selectAreDetailsLoading);
    const areError = useSelector(selectAreDetailsError);
    const [
        numberOfDisplayedCastTiles,
        setNumberOfDisplayedCastTiles
    ] = useState(numberOfDisplayedMovieCastCrew);
    const [
        numberOfDisplayedCrewTiles,
        setNumberOfDisplayedCrewTiles
    ] = useState(numberOfDisplayedMovieCastCrew);

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
                {cast && cast.length > 0 ? (
                    <>
                        <Heading title={getNumberOfCast(cast)} />
                        <TilesSection
                            children=
                            {<PersonCastAndCrewTiles
                                data={cast.slice(0, numberOfDisplayedCastTiles)}
                            />}
                        />
                        {cast.length >= numberOfDisplayedMovieCastCrew ? (
                            <TilesButton
                                castCrew={cast}
                                numberOfDisplayedTiles={numberOfDisplayedCastTiles}
                                setNumberOfDisplayedTiles={setNumberOfDisplayedCastTiles}
                                numberOfDisplayedCastCrew={numberOfDisplayedMovieCastCrew}
                            />
                        ) : null}
                    </>
                ) : null}
                {crew && crew.length > 0 ? (
                    <>
                        <Heading title={getNumberOfCrew(crew)} />
                        <TilesSection
                            children=
                            {<PersonCastAndCrewTiles
                                data={crew.slice(0, numberOfDisplayedCrewTiles)}
                            />}
                        />
                        {crew.length >= numberOfDisplayedMovieCastCrew ? (
                            <TilesButton
                                castCrew={crew}
                                numberOfDisplayedTiles={numberOfDisplayedCrewTiles}
                                setNumberOfDisplayedTiles={setNumberOfDisplayedCrewTiles}
                                numberOfDisplayedCastCrew={numberOfDisplayedMovieCastCrew}
                                lastElement
                            />
                        ) : null}
                    </>
                ) : null}
            </Main>
        </Checker >
    );
};