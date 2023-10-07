import { call, put, delay, takeLatest } from "redux-saga/effects";
import { fetchGenres, fetchGenresError, fetchGenresSuccess } from "./genresSlice";
import { getApiData } from "./getApiData";
import { api_key } from "./apiKey";

function* fetchGenresHandler() {
    const apiKey = api_key;

    try {
        yield delay(500);
        const genres = yield call(() => getApiData(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`));
        yield put(fetchGenresSuccess(genres.genres));
    } catch (error) {
        yield put(fetchGenresError());
        yield call(alert, "Something go wrong!");
    }
};

export function* genresSaga() {
    yield takeLatest(fetchGenres.type, fetchGenresHandler);
};