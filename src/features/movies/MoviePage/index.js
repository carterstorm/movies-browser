import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Checker } from "../../../common/Checker";
import { MovieHeroSection } from "./MovieHeroSection";
import { BigTileElement } from "../../../common/tile/BigTileElement";
import { BigMovieTile } from "../../../common/tile/BigTileElement/BigMovieTile";
import { TilesSection } from "../../../common/tiles/TilesSection";
import { CastTiles } from "../../../common/tiles/CastTiles";
import { Heading } from "../../../common/Heading";
import { Main } from "../../../common/Main";
import {
    fetchDetails,
    resetDetailsState,
    selectAreDetailsError,
    selectAreDetailsLoading,
} from "../../../detailsSlice";
import { fetchGenres } from "../../../genresSlice";
import { CrewTiles } from "../../../common/tiles/CrewTiles";

export const MoviePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const areLoading = useSelector(selectAreDetailsLoading);
    const areError = useSelector(selectAreDetailsError);

    useEffect(() => {
        dispatch(fetchDetails({ id, type: "movie" }));

        return () => {
            dispatch(resetDetailsState());
        };
    }, [dispatch, id]);

    useEffect(() => {
        dispatch(fetchGenres())
    }, [dispatch])

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

                <Heading title={"Cast"} />
                <TilesSection
                    children={<CastTiles />}
                    people
                />
                <Heading title={"Crew"} />
                <TilesSection
                    children={<CrewTiles />}
                    people
                />
            </Main>
        </Checker>
    );
};