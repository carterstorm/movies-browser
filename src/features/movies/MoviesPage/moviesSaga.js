import { takeEvery, call, put, delay } from "redux-saga/effects";
import { getPopularMovies } from "../../../getPopularMovies";
import {
    fetchPopularMovies,
    fetchPopularMoviesError,
    fetchPopularMoviesSuccess
} from "./moviesSlice";

function* fetchPopularMoviesHandler() {
    try {
        yield delay(500);
        const popularMovies = yield call(getPopularMovies);
        yield put(fetchPopularMoviesSuccess(popularMovies));
    } catch (error) {
        yield put(fetchPopularMoviesError());
        yield call(alert, "Something go wrong!");
    }
};

export function* moviesSaga() {
    yield takeEvery(fetchPopularMovies.type, fetchPopularMoviesHandler);
};