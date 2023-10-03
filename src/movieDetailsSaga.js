import { takeEvery, call, put, delay } from "redux-saga/effects";
import { fetchMovieDetails, fetchMovieDetailsError, fetchMovieDetailsSuccess } from "./movieDetailsSlice";
import { api_key } from "./apiKey";
import { getApiData } from "./getApiData";

function* fetchMovieDetailsHandler({ payload: id }) {
    const apiKey = api_key;

    try {
        yield delay(1000);
        const movieDetailsList = yield call(() => getApiData(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
        ));
        yield put(fetchMovieDetailsSuccess(movieDetailsList));
    } catch (error) {
        yield put(fetchMovieDetailsError());
        yield call(alert, "Wrong!");
    };
};

export function* movieDetailsSaga() {
    yield takeEvery(fetchMovieDetails.type, fetchMovieDetailsHandler);
};