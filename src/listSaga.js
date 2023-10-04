import { takeEvery, call, put, delay } from "redux-saga/effects";
import {
    fetchList,
    fetchListError,
    fetchListSuccess,
} from "./listSlice";
import store from "./store";
import { api_key } from "./apiKey";
import { getApiData } from "./getApiData";

function* fetchListHandler() {
    const pageNumber = store.getState().list.page;
    const apiKey = api_key;

    try {
        yield delay(500);
        const data = yield call(() => getApiData(
            `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${pageNumber}`
        ));
        yield put(fetchListSuccess(data));
    } catch (error) {
        yield put(fetchListError());
        yield call(alert, "Something go wrong!");
    }
};

export function* listSaga() {
    yield takeEvery(fetchList.type, fetchListHandler);
};