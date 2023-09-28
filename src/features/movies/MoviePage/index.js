import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Checker } from "../../../common/Checker";
import {
    fetchMovieDetails,
    selectAreMovieDetailsError,
    selectAreMovieDetailsLoading,
    selectMovieDetailsList,
} from "../../../movieDetailsSlice";
import { MovieHeroSection } from "./MovieHeroSection";
import { MovieTile } from "../../../common/MovieTile";
import { BigTileMovieContainer } from "./styled";

export const MoviePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const areLoading = useSelector(selectAreMovieDetailsLoading);
    const areError = useSelector(selectAreMovieDetailsError);
    const {
        backdrop_path,
        title,
        vote_average,
        vote_count,
        poster_path,
        release_date,
        genres,
    } = useSelector(selectMovieDetailsList);

    useEffect(() => {
        dispatch(fetchMovieDetails(id));
    }, [dispatch, id]);

    return (
        <Checker
            areLoading={areLoading}
            areError={areError}>
            {backdrop_path &&
                (
                    <>
                        <MovieHeroSection
                            backdrop_path={backdrop_path}
                            title={title}
                            vote_average={vote_average}
                            vote_count={vote_count}
                        />
                        <BigTileMovieContainer>
                            <MovieTile
                                key={id}
                                genre_ids={genres}
                                title={title}
                                poster_path={poster_path}
                                release_date={release_date}
                                vote_average={vote_average}
                                vote_count={vote_count}
                            />
                        </BigTileMovieContainer>

                    </>
                )}
        </Checker>
    );
};