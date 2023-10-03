import { takeEvery, call, put, delay } from "redux-saga/effects";
import { fetchMovieDetails, fetchMovieDetailsError, fetchMovieDetailsSuccess } from "./movieDetailsSlice";
import { api_key } from "./apiKey";
import { getApiData } from "./getApiData";
import store from "./store";

function* fetchMovieDetailsHandler() {
    const movieId = store.getState().movieDetails.movieId;
    const apiKey = api_key;

    try {
        yield delay(1000);
        const movieDetailsList = yield call(() => getApiData(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
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