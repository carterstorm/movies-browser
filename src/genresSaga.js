import { call, put, delay, takeLatest } from "redux-saga/effects";
import { fetchGenres, fetchGenresError, fetchGenresSuccess } from "./genresSlice";
import { getApiData } from "./getApiData";
import { apiBaseLink, apiKey, apiLanguage } from "./common/commonValues";

function* fetchGenresHandler() {
    try {
        yield delay(500);
        const genres = yield call(() => getApiData(
            `${apiBaseLink}genre/movie/list?api_key=${apiKey}&language=${apiLanguage}`));
        yield put(fetchGenresSuccess(genres.genres));
    } catch (error) {
        yield put(fetchGenresError());
        yield call(alert, "Something go wrong!");
    }
};

export function* genresSaga() {
    yield takeLatest(fetchGenres.type, fetchGenresHandler);
};