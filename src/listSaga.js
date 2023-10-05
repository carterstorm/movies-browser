import { takeEvery, call, put, delay } from "redux-saga/effects";
import {
    fetchListError,
    fetchListSuccess,
    setPage,
} from "./listSlice";
import store from "./store";
import { api_key } from "./apiKey";
import { getApiData } from "./getApiData";

function* fetchListHandler() {
    const pageNumber = store.getState().list.page;
    const apiKey = api_key;
    const path = store.getState().list.path;

    try {
        yield delay(500);
        const data = yield call(() => getApiData(
            `https://api.themoviedb.org/3/${path}?api_key=${apiKey}&language=en-US&page=${pageNumber}`
        ));
        yield put(fetchListSuccess(data));
    } catch (error) {
        yield put(fetchListError());
        yield call(alert, "Something go wrong!");
    }
};

export function* listSaga() {
    yield takeEvery(setPage.type, fetchListHandler);
};