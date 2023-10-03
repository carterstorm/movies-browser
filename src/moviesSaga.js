import { takeEvery, call, put, delay } from "redux-saga/effects";
import {
    fetchPopularMovies,
    fetchPopularMoviesError,
    fetchPopularMoviesSuccess,
} from "./moviesSlice";
import store from "./store";
import { api_key } from "./apiKey";
import { getApiData } from "./getApiData";

function* fetchPopularMoviesHandler() {
    const pageNumber = store.getState().movies.page;
    const apiKey = api_key;

    try {
        yield delay(500);
        const popularMovies = yield call(() => getApiData(
            `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${pageNumber}`
        ));
        yield put(fetchPopularMoviesSuccess(popularMovies));
    } catch (error) {
        yield put(fetchPopularMoviesError());
        yield call(alert, "Something go wrong!");
    }
};

export function* moviesSaga() {
    yield takeEvery(fetchPopularMovies.type, fetchPopularMoviesHandler);
};