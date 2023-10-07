import { call, put, delay, takeLatest } from "redux-saga/effects";
import { fetchPersonDetails, fetchPersonDetailsError, fetchPersonDetailsSuccess } from "./personDetailsSlice";
import { api_key } from "./apiKey";
import { getApiData } from "./getApiData";
import store from "./store";

function* fetchPersonDetailsHandler() {
    const personId = store.getState().personDetails.personId;
    const apiKey = api_key;

    try {
        yield delay(1000);
        const personDetailsList = yield call(() => getApiData(
            `https://api.themoviedb.org/3/person/${personId}?api_key=${apiKey}&language=en-US`
        ));
        yield put(fetchPersonDetailsSuccess(personDetailsList));
    } catch (error) {
        yield put(fetchPersonDetailsError());
        yield call(alert, "Wrong!");
    };
};

export function* personDetailsSaga() {
    yield takeLatest(fetchPersonDetails.type, fetchPersonDetailsHandler);
};