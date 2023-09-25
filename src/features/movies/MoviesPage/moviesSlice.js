import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        popularMovies: [],
        loading: false,
        page: 1,
        numberOfPages: null,
    },
    reducers: {
        setPage: (state, { payload: pageNumber }) => {
            state.page = pageNumber;
        },
        fetchPopularMovies: state => {
            state.loading = true;
        },
        fetchPopularMoviesSuccess: (state, { payload: popularMovies }) => {
            state.popularMovies = popularMovies.results;
            state.numberOfPages = popularMovies.total_pages;
            state.loading = false;
        },
        fetchPopularMoviesError: state => {
            state.loading = false;
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
export const selectPage = state => selectMoviesState(state).page;
export const selectNumberOfPages = state => selectMoviesState(state).numberOfPages;

export default moviesSlice.reducer;