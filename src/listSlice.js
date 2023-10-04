import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: "list",
    initialState: {
        list: [],
        loading: false,
        error: false,
        page: 1,
        numberOfPages: 500,
        path: "movie/popular",
    },
    reducers: {
        setPath: (state, { payload: path }) => {
            state.path = path;
        },
        setPage: (state, { payload: pageNumber }) => {
            state.page = pageNumber;
        },
        fetchList: state => {
            state.loading = true;
            state.error = false;
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
    },
});

export const {
    setPath,
    setPage,
    fetchList,
    fetchListSuccess,
    fetchListError,
} = listSlice.actions;

export const selectListState = state => state.list;
export const selectList = state => selectListState(state).list;
export const selectAreListLoading = state => selectListState(state).loading;
export const selectAreListError = state => selectListState(state).error;
export const selectPage = state => selectListState(state).page;
export const selectNumberOfPages = state => selectListState(state).numberOfPages;

export default listSlice.reducer;