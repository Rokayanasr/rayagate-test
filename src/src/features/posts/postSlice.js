import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    allMovies: [],
    loading: false,
    error: null,
};
const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setAllMovies(state, { payload }) {
            state.allMovies = payload;
        },
        setLoading(state, { payload }) {
            state.loading = payload;
        },
        setError(state, { payload }) {
            state.error = payload;
        },
    },
});

export default postSlice.reducer;
