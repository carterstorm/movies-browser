import { all, call, delay, put, takeLatest } from "redux-saga/effects";
import { fetchDetails, fetchDetailsError, fetchDetailsSuccess } from "./detailsSlice";
import { getApiData } from "./getApiData";
import { apiBaseLink, apiKey, apiLanguage } from "./common/commonValues";

function* fetchDetailsHandler({ payload: { id, type } }) {
    const itemPath =
        type === "movie"
            ? `${apiBaseLink}/movie/${id}?api_key=${apiKey}&language=${apiLanguage}`
            : `${apiBaseLink}/person/${id}?api_key=${apiKey}&language=${apiLanguage}`;

    const extraPath =
        type === "movie"
            ? `${apiBaseLink}/movie/${id}/credits?api_key=${apiKey}`
            : `${apiBaseLink}/person/${id}/movie_credits?api_key=${apiKey}&language=${apiLanguage}`;
    try {
        yield delay(500);
        const [itemData, extraData] = yield all([
            call(getApiData, itemPath),
            call(getApiData, extraPath),
        ]);
        yield put(fetchDetailsSuccess({ itemData, extraData }));
    } catch (error) {
        yield put(fetchDetailsError());
        yield call(alert, "Something go wrong!");
    };
};

export function* watchFetchDetails() {
    yield takeLatest(fetchDetails.type, fetchDetailsHandler);
};