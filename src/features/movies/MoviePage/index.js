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
    const isLoading = useSelector(selectAreMovieDetailsLoading);
    const isError = useSelector(selectAreMovieDetailsError);

    useEffect(() => {
        dispatch(fetchMovieDetails(id));
    }, [dispatch, id]);

    return (
        <Checker
            isLoading={isLoading}
            isError={isError}>
            Strona
        </Checker>
    );
};