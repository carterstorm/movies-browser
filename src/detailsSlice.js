import { createSlice } from "@reduxjs/toolkit";

const detailsSlice = createSlice({
    name: 'details',
    initialState: {
        itemData: [],
        extraData: [],
        loading: true,
        error: false,
    },
    reducers: {
        fetchDetails: state => {
            state.loading = true;
        },
        fetchDetailsSuccess: (state, { payload: { itemData, extraData } }) => {
            state.loading = false;
            state.error = false;
            state.itemData = itemData;
            state.extraData = extraData;
        },
        fetchDetailsError: state => {
            state.loading = false;
            state.error = true;
        },
    },
});

export const {
    fetchDetails,
    fetchDetailsSuccess,
    fetchDetailsError
} = detailsSlice.actions;

export const selectDetailsSlice = state => state.details;
export const selectDetailsItemData = state => selectDetailsSlice(state).itemData;
export const selectDetailsExtraData = state => selectDetailsSlice(state).extraData;
export const selectAreDetailsLoading = state => selectDetailsSlice(state).loading;
export const selectAreDetailsError = state => selectDetailsSlice(state).error;

export default detailsSlice.reducer;