import { takeEvery, call, put, delay } from "redux-saga/effects";
import { getMoviesDetails } from "./getMoviesDetails";
import { fetchMovieDetails, fetchMovieDetailsError, fetchMovieDetailsSuccess } from "./movieDetailsSlice";

function* fetchMovieDetailsHandler({ payload: id }) {
    try {
        yield delay(1000);
        const movieDetailsList = yield call(getMoviesDetails, id);
        yield put(fetchMovieDetailsSuccess(movieDetailsList));
    } catch (error) {
        yield put(fetchMovieDetailsError());
        yield call(alert, "Wrong!");
    };
};

export function* movieDetailsSaga() {
    yield takeEvery(fetchMovieDetails.type, fetchMovieDetailsHandler);
};