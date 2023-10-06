import { createSlice } from "@reduxjs/toolkit";

const personDetailsSlice = createSlice({
    name: "personDetails",
    initialState: {
        personDetailsList: [],
        loading: false,
        error: false,
        personId: null,
    },
    reducers: {
        fetchPersonDetails: (state, { payload: id }) => {
            state.loading = true;
            state.error = false;
            state.personId = id;
        },
        fetchPersonDetailsSuccess: (state, { payload: personDetailsList }) => {
            state.personDetailsList = personDetailsList;
            state.loading = false;
            state.error = false;
        },
        fetchPersonDetailsError: state => {
            state.loading = false;
            state.error = true;
        },
    },
});

export const {
    fetchPersonDetails,
    fetchPersonDetailsSuccess,
    fetchPersonDetailsError
} = personDetailsSlice.actions;

export const selectPersonDetails = state => state.personDetails;
export const selectPersonDetailsList = state => selectPersonDetails(state).personDetailsList;
export const selectArePersonDetailsLoading = state => selectPersonDetails(state).loading;
export const selectArePersonDetailsError = state => selectPersonDetails(state).error;

export default personDetailsSlice.reducer;