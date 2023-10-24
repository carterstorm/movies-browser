import { call, put, delay, takeLatest } from "redux-saga/effects";
import {
    fetchList,
    fetchListError,
    fetchListSuccess,
} from "./listSlice";
import { getApiData } from "./getApiData";
import { apiBaseLink, apiKey, apiLanguage } from "./common/commonValues";

function* fetchListHandler({ payload: { page, urlQuery, type } }) {
    const path =
        type === "movies"
            ? urlQuery
                ? `${apiBaseLink}search/movie?api_key=${apiKey}&language=${apiLanguage}&query=${urlQuery}&page=${page}`
                : `${apiBaseLink}discover/movie?api_key=${apiKey}&language=${apiLanguage}&sort_by=popularity.desc&page=${page}`
            : urlQuery
                ? `${apiBaseLink}search/person?api_key=${apiKey}&language=${apiLanguage}&query=${urlQuery}&page=${page}`
                : `${apiBaseLink}person/popular?api_key=${apiKey}&language=${apiLanguage}&page=${page}`;

    try {
        yield delay(500);
        const data = yield call(() => getApiData(path));
        yield put(fetchListSuccess(data));
    } catch (error) {
        yield put(fetchListError());
        yield call(alert, "Something go wrong!");
    }
};

export function* listSaga() {
    yield takeLatest(fetchList.type, fetchListHandler);
};