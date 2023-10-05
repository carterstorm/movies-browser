import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: "list",
    initialState: {
        list: [],
        loading: true,
        error: false,
        page: 1,
        numberOfPages: 500,
        path: "",
    },
    reducers: {
        setPath: (state, { payload: path }) => {
            state.path = path;
        },
        setPage: (state, { payload: pageNumber }) => {
            state.loading = true;
            state.error = false;
            state.page = pageNumber;
        },
        fetchListSuccess: (state, { payload: list }) => {
            state.list = list.results;
            state.loading = false;
            state.error = false;
        },
        fetchListError: state => {
            state.loading = false;
            state.error = true;
        },
        resetListState: state => {
            state.list = [];
            state.loading = true;
            state.error = false;
            state.page = 1;
            state.numberOfPages = 500;
            state.path = "";
        }
    },
});

export const {
    setPath,
    setPage,
    fetchListSuccess,
    fetchListError,
    resetListState,
} = listSlice.actions;

export const selectListState = state => state.list;
export const selectList = state => selectListState(state).list;
export const selectAreListLoading = state => selectListState(state).loading;
export const selectAreListError = state => selectListState(state).error;
export const selectPage = state => selectListState(state).page;
export const selectNumberOfPages = state => selectListState(state).numberOfPages;

export default listSlice.reducer;