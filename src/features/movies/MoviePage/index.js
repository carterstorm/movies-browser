import { useEffect, useRef, useState } from "react";
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
import { numberOfDisplayedMovieCastCrew } from "../../../common/commonValues";

export const MoviePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { cast, crew } = useSelector(selectDetailsExtraData);
    const areLoading = useSelector(selectAreDetailsLoading);
    const areError = useSelector(selectAreDetailsError);
    const buttonCastRef = useRef(null);
    const buttonCrewRef = useRef(null);
    const [
        numberOfDisplayedCastTiles,
        setNumberOfDisplayedCastTiles
    ] = useState(numberOfDisplayedMovieCastCrew);
    const [
        numberOfDisplayedCrewTiles,
        setNumberOfDisplayedCrewTiles
    ] = useState(numberOfDisplayedMovieCastCrew);

    const handleClick = (castCrew, refElement, numberOfDisplayedTiles, setNumberOfDisplayedTiles) => {
        if (castCrew.length > numberOfDisplayedTiles) {
            setNumberOfDisplayedTiles(castCrew.length);
            refElement.current.innerText = "Hide";
        } else if (castCrew.length <= numberOfDisplayedTiles) {
            setNumberOfDisplayedTiles(numberOfDisplayedMovieCastCrew);
            refElement.current.innerText = "Show all";
        };
    };

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
                        <button
                            ref={buttonCastRef}
                            onClick={() =>
                                handleClick(cast, buttonCastRef, numberOfDisplayedCastTiles, setNumberOfDisplayedCastTiles)}>
                            Show all
                        </button>
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
                        <button
                            ref={buttonCrewRef}
                            onClick={() => handleClick(crew, buttonCrewRef, numberOfDisplayedCrewTiles, setNumberOfDisplayedCrewTiles)}>
                            Show all
                        </button>
                    </>
                ) : null}
            </Main>
        </Checker>
    );
};