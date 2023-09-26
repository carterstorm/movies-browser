import { all } from "redux-saga/effects";
import { moviesSaga } from "./features/movies/MoviesPage/moviesSaga";
import { genresSaga } from "./features/movies/MoviesPage/genresSaga";

export default function* rootSaga() {
    yield all([
        moviesSaga(),
        genresSaga(),
    ]);
};