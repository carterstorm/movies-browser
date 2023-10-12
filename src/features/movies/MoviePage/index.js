import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Checker } from "../../../common/Checker";
import { MovieHeroSection } from "./MovieHeroSection";
import { BigTileElement } from "../../../common/tile/BigTileElement";
import { BigMovieTile } from "../../../common/tile/BigTileElement/BigMovieTile";
import { TilesSection } from "../../../common/tiles/TilesSection";
import { Heading } from "../../../common/Heading";
import { Main } from "../../../common/Main";
import { MovieCastAndCrewTiles } from "../../../common/tiles/MovieCastAndCrewTiles";
import {
    fetchDetails,
    resetDetailsState,
    selectAreDetailsError,
    selectAreDetailsLoading,
    selectDetailsExtraData,
} from "../../../detailsSlice";
import { fetchGenres } from "../../../genresSlice";
import { getNumberOfCast, getNumberOfCrew } from "../../../common/commonFunction";
import { numberOfDisplayedPersonCastCrew } from "../../../common/commonValues";
import { TilesButton } from "../../../common/TilesButton";

export const MoviePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { cast, crew } = useSelector(selectDetailsExtraData);
    const areLoading = useSelector(selectAreDetailsLoading);
    const areError = useSelector(selectAreDetailsError);
    const [
        numberOfDisplayedCastTiles,
        setNumberOfDisplayedCastTiles
    ] = useState(numberOfDisplayedPersonCastCrew);
    const [
        numberOfDisplayedCrewTiles,
        setNumberOfDisplayedCrewTiles
    ] = useState(numberOfDisplayedPersonCastCrew);



    useEffect(() => {
        dispatch(fetchDetails({ id, type: "movie" }));

        return () => {
            dispatch(resetDetailsState());
        };
    }, [dispatch, id]);

    useEffect(() => {
        dispatch(fetchGenres())
    }, [dispatch]);

    return (
        <Checker
            areLoading={areLoading}
            areError={areError}
        >
            <MovieHeroSection />
            <Main>
                <BigTileElement
                    children={<BigMovieTile />}
                />
                {cast && cast.length > 0 ? (
                    <>
                        <Heading title={getNumberOfCast(cast)} />
                        <TilesSection
                            people
                            children={
                                <MovieCastAndCrewTiles
                                    data={cast.slice(0, numberOfDisplayedCastTiles)}
                                />}
                        />
                        {cast.length >= numberOfDisplayedPersonCastCrew ? (
                            <TilesButton
                                castCrew={cast}
                                numberOfDisplayedTiles={numberOfDisplayedCastTiles}
                                setNumberOfDisplayedTiles={setNumberOfDisplayedCastTiles}
                                numberOfDisplayedCastCrew={numberOfDisplayedPersonCastCrew}
                            />
                        ) : null}
                    </>
                ) : null}
                {crew && crew.length > 0 ? (
                    <>
                        <Heading title={getNumberOfCrew(crew)} />
                        <TilesSection
                            people
                            children={
                                <MovieCastAndCrewTiles
                                    data={crew.slice(0, numberOfDisplayedCrewTiles)}
                                />}
                        />
                        {crew.length >= numberOfDisplayedPersonCastCrew ? (
                            <TilesButton
                                castCrew={crew}
                                numberOfDisplayedTiles={numberOfDisplayedCrewTiles}
                                setNumberOfDisplayedTiles={setNumberOfDisplayedCrewTiles}
                                numberOfDisplayedCastCrew={numberOfDisplayedPersonCastCrew}
                            />
                        ) : null}
                    </>
                ) : null}
            </Main>
        </Checker>
    );
};