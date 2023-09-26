import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import genresReducer from "./genresSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        genres: genresReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;