import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Checker } from "../../../common/Checker";
import { MovieHeroSection } from "./MovieHeroSection";
import { fetchGenres } from "../../../genresSlice";
import { BigTileElement } from "../../../common/tile/BigTileElement";
import { BigMovieTile } from "../../../common/tile/BigTileElement/BigMovieTile";
import { TilesSection } from "../../../common/tiles/TilesSection";
import { CastAndCrewTiles } from "../../../common/tiles/CastAndCrewTiles";
import { Heading } from "../../../common/Heading";
import {
    fetchDetails,
    selectAreDetailsError,
    selectAreDetailsLoading,
} from "../../../detailsSlice";

export const MoviePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const areLoading = useSelector(selectAreDetailsLoading);
    const areError = useSelector(selectAreDetailsError);

    useEffect(() => {
        dispatch(fetchDetails({ id, type: "movie" }));
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
            <BigTileElement
                children={<BigMovieTile />}
            />
            <Heading title={"Cast"} />
            <TilesSection
                children={<CastAndCrewTiles />}
                people
            />
        </Checker>
    );
};