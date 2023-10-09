import { call, put, delay, takeLatest } from "redux-saga/effects";
import { fetchPersonDetails, fetchPersonDetailsError, fetchPersonDetailsSuccess } from "./personDetailsSlice";
import { getApiData } from "./getApiData";
import store from "./store";
import { apiBaseLink, apiKey, apiLanguage } from "./common/commonValues";

function* fetchPersonDetailsHandler() {
    const personId = store.getState().personDetails.personId;

    try {
        yield delay(1000);
        const personDetailsList = yield call(() => getApiData(
            `${apiBaseLink}person/${personId}?api_key=${apiKey}&language=${apiLanguage}`
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