import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        popularMovies: [],
        loading: false,
    },
    reducers: {
        fetchPopularMovies: state => {
            state.loading = true;
        },
        fetchPopularMoviesSuccess: (state, { payload: popularMovies }) => {
            state.popularMovies = popularMovies;
            state.loading = false;
        },
        fetchPopularMoviesError: state => {
            state.loading = false;
        },
    },
});

export const {
    fetchPopularMovies,
    fetchPopularMoviesSuccess,
    fetchPopularMoviesError,
} = moviesSlice.actions;

export const selectMoviesState = state => state.movies;
export const selectPopularMovies = state => selectMoviesState(state).popularMovies;
export const selectArePopularMoviesLoading = state => selectMoviesState(state).loading;

export default moviesSlice.reducer;