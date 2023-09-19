import { takeEvery, call, put, delay } from "redux-saga/effects";
import { getPopularMovies } from "./getPopularMovies";
import {
    fetchPopularMovies,
    fetchPopularMoviesError,
    fetchPopularMoviesSuccess
} from "./moviesSlice";

function* fetchPopularMoviesHandler() {
    try {
        yield delay(1000);
        const popularMovies = yield call(getPopularMovies);
        yield put(fetchPopularMoviesSuccess(popularMovies.results));
    } catch (error) {
        yield put(fetchPopularMoviesError());
        yield call(alert, "Something go wrong!");
    }
};

export function* moviesSaga() {
    yield takeEvery(fetchPopularMovies.type, fetchPopularMoviesHandler);
};