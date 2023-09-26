import { all } from "redux-saga/effects";
import { moviesSaga } from "./moviesSaga";
import { genresSaga } from "./genresSaga";
import { movieDetailsSaga } from "./movieDetailsSaga";

export default function* rootSaga() {
    yield all([
        moviesSaga(),
        genresSaga(),
        movieDetailsSaga(),
    ]);
};