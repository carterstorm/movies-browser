import { all } from "redux-saga/effects";
import { moviesSaga } from "./features/movies/MoviesPage/moviesSaga";

export default function* rootSaga() {
    yield all([
        moviesSaga(),
    ]);
};