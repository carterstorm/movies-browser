import { all } from "redux-saga/effects";
import { listSaga } from "./listSaga";
import { genresSaga } from "./genresSaga";
import { personDetailsSaga } from "./personDetailsSaga";
import { watchFetchDetails } from "./detailsSaga";

export default function* rootSaga() {
    yield all([
        listSaga(),
        genresSaga(),
        personDetailsSaga(),
        watchFetchDetails(),
    ]);
};