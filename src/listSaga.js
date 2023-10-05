import { takeEvery, call, put, delay } from "redux-saga/effects";
import {
    fetchListError,
    fetchListSuccess,
    setPath,
} from "./listSlice";
import store from "./store";
import { getApiData } from "./getApiData";

function* fetchListHandler() {
    const path = store.getState().list.path;

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
    yield takeEvery(setPath.type, fetchListHandler);
};