import { call, put, delay, takeLatest } from "redux-saga/effects";
import { fetchMovieDetails, fetchMovieDetailsError, fetchMovieDetailsSuccess } from "./movieDetailsSlice";
import { getApiData } from "./getApiData";
import store from "./store";
import { apiBaseLink, apiKey, apiLanguage } from "./common/commonValues";

function* fetchMovieDetailsHandler() {
    const movieId = store.getState().movieDetails.movieId;

    try {
        yield delay(1000);
        const movieDetailsList = yield call(() => getApiData(
            `${apiBaseLink}/movie/${movieId}?api_key=${apiKey}&language=${apiLanguage}`
        ));
        yield put(fetchMovieDetailsSuccess(movieDetailsList));
    } catch (error) {
        yield put(fetchMovieDetailsError());
        yield call(alert, "Wrong!");
    };
};

export function* movieDetailsSaga() {
    yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
};