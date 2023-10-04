import { all } from "redux-saga/effects";
import { listSaga } from "./listSaga";
import { genresSaga } from "./genresSaga";
import { movieDetailsSaga } from "./movieDetailsSaga";

export default function* rootSaga() {
    yield all([
        listSaga(),
        genresSaga(),
        movieDetailsSaga(),
    ]);
};