import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./listSlice";
import genresReducer from "./genresSlice";
import detailsReducer from "./detailsSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        list: listReducer,
        genres: genresReducer,
        details: detailsReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;