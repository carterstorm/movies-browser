import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Checker } from "../../../common/Checker";
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
        dispatch(fetchMovieDetails(id));
    }, [dispatch, id]);

    return (
        <Checker
            areLoading={areLoading}
            areError={areError}>
            Strona
        </Checker>
    );
};