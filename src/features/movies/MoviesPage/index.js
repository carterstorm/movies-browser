import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { ListPage } from "../../../common/ListPage";
import { fetchGenres } from "../../../genresSlice";

export const MoviesPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGenres());
    }, [dispatch]);

    return (
        <ListPage
            type="movies"
            headingTitle="Popular movies"
            movies
        />
    )
}