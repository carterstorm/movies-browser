import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
    name: "movieDetails",
    initialState: {
        movieDetailsList: [],
        loading: false,
    },
    reducers: {
        fetchMovieDetails: state => {
            state.loading = true;
        },
        fetchMovieDetailsSuccess: (state, { payload: movieDetailsList }) => {
            state.movieDetailsList = movieDetailsList;
            state.loading = false;
        },
        fetchMovieDetailsError: state => {
            state.loading = false;
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

export default movieDetailsSlice.reducer;