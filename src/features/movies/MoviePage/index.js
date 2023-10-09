import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Checker } from "../../../common/Checker";
import { MovieHeroSection } from "./MovieHeroSection";
import { fetchGenres } from "../../../genresSlice";
import { BigTileElement } from "../../../common/tile/BigTileElement";
import { BigMovieTile } from "../../../common/tile/BigTileElement/BigMovieTile";
import { fetchDetails } from "../../../detailsSlice";
import {
    fetchMovieDetails,
    selectAreMovieDetailsError,
    selectAreMovieDetailsLoading,
} from "../../../movieDetailsSlice";


export const MoviePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const areLoading = useSelector(selectAreMovieDetailsLoading);
    const areError = useSelector(selectAreMovieDetailsError);

    useEffect(() => {
        dispatch(fetchDetails({ id: id, type: "movie" }));
    }, [dispatch, id]);

    useEffect(() => {
        dispatch(fetchMovieDetails(id));
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
        </Checker>
    );
};