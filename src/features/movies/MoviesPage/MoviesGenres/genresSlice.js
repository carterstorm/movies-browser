import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
    name: "genres",
    initialState: {
        genresList: [],
        loading: false,
    },
    reducers: {
        fetchGenres: state => {
            state.loading = true;
        },
        fetchGenresSuccess: (state, { payload: genresList }) => {
            state.genresList = genresList;
            state.loading = false;
        },
        fetchGenresError: state => {
            state.loading = false;
        },
    },
});

export const {
    fetchGenres,
    fetchGenresSuccess,
    fetchGenresError
} = genresSlice.actions;

export const selectGenresState = state => state.genres;
export const selectGenresList = state => selectGenresState(state).genresList;

export default genresSlice.reducer;