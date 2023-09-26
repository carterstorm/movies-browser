import { takeEvery, call, put, delay } from "redux-saga/effects";
import { getGenres } from "../../../getGenres";
import { fetchGenres, fetchGenresError, fetchGenresSuccess } from "./genresSlice";

function* fetchGenresHandler() {
    try {
        yield delay(500);
        const genres = yield call(getGenres);
        yield put(fetchGenresSuccess(genres));
    } catch (error) {
        yield put(fetchGenresError());
        yield call(alert, "Something go wrong!");
    }
};

export function* genresSaga() {
    yield takeEvery(fetchGenres.type, fetchGenresHandler);
};