import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
    name: "movieDetails",
    initialState: {
        movieDetailsList: [],
        loading: false,
        error: false,
        movieId: null,
    },
    reducers: {
        fetchMovieDetails: (state, { payload: id }) => {
            state.loading = true;
            state.error = false;
            state.movieId = id;
        },
        fetchMovieDetailsSuccess: (state, { payload: movieDetailsList }) => {
            state.movieDetailsList = movieDetailsList;
            state.loading = false;
            state.error = false;
        },
        fetchMovieDetailsError: state => {
            state.loading = false;
            state.error = true;
        },
    },
});

export const {
    fetchMovieDetails,
    fetchMovieDetailsSuccess,
    fetchMovieDetailsError
} = movieDetailsSlice.actions;

export const selectMovieDetails = state => state.movieDetails;
export const selectMovieDetailsList = state => selectMovieDetails(state).movieDetailsList;
export const selectAreMovieDetailsLoading = state => selectMovieDetails(state).loading;
export const selectAreMovieDetailsError = state => selectMovieDetails(state).error;

export default movieDetailsSlice.reducer;