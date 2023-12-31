import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: "list",
    initialState: {
        list: [],
        loading: true,
        error: false,
        maxPageNumber: undefined,
        totalResults: undefined,
    },
    reducers: {
        fetchList: state => {
            state.loading = true;
        },
        fetchListSuccess: (state, { payload: list }) => {
            state.list = list.results;
            state.loading = false;
            state.error = false;
            state.maxPageNumber = list.total_pages;
            state.totalResults = list.total_results;
        },
        fetchListError: state => {
            state.loading = false;
            state.error = true;
        },
        resetListState: state => {
            state.list = [];
            state.loading = true;
            state.error = false;
        }
    },
});

export const {
    fetchList,
    fetchListSuccess,
    fetchListError,
    resetListState,
} = listSlice.actions;

export const selectListState = state => state.list;
export const selectList = state => selectListState(state).list;
export const selectAreListLoading = state => selectListState(state).loading;
export const selectAreListError = state => selectListState(state).error;
export const selectPage = state => selectListState(state).page;
export const selectMaxPageNumber = state => selectListState(state).maxPageNumber;
export const selectTotalResults = state => selectListState(state).totalResults;

export default listSlice.reducer;