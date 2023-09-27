import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        popularMovies: [],
        loading: false,
        error: false,
        page: 1,
        numberOfPages: 500,
    },
    reducers: {
        setPage: (state, { payload: pageNumber }) => {
            state.page = pageNumber;
        },
        fetchPopularMovies: state => {
            state.loading = true;
            state.error = false;
        },
        fetchPopularMoviesSuccess: (state, { payload: popularMovies }) => {
            state.popularMovies = popularMovies.results;
            state.loading = false;
            state.error = false;
        },
        fetchPopularMoviesError: state => {
            state.loading = false;
            state.error = true;
        },
    },
});

export const {
    setPage,
    fetchPopularMovies,
    fetchPopularMoviesSuccess,
    fetchPopularMoviesError,
} = moviesSlice.actions;

export const selectMoviesState = state => state.movies;
export const selectPopularMovies = state => selectMoviesState(state).popularMovies;
export const selectArePopularMoviesLoading = state => selectMoviesState(state).loading;
export const selectArePopularMoviesError = state => selectMoviesState(state).error;
export const selectPage = state => selectMoviesState(state).page;
export const selectNumberOfPages = state => selectMoviesState(state).numberOfPages;

export default moviesSlice.reducer;