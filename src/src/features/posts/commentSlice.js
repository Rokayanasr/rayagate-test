import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_API_URL = "https://jsonplaceholder.typicode.com/";

const initialState = {
    allComments: [],
    loading: false,
    error: null,
    comments: {},
};

// Async thunk for fetching all comments
export const fetchAllComments = createAsyncThunk("comments/fetchAllComments", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${BASE_API_URL}comments`);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        setAllComments(state, { payload }) {
            state.allComments = payload;
        },
        setLoading(state, { payload }) {
            state.loading = payload;
        },
        setError(state, { payload }) {
            state.error = payload;
        },
        setCommentsById(state, { payload }) {
            // if the id cames in the payload == the id of the post returned
            state.comments = state.allComments.filter((comment) => comment.postId == payload);
            // console.log("comments by id" + state.comments);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllComments.pending, (state) => {
                state.loading = true;
                // console.log("Fetching comments...");
            })
            .addCase(fetchAllComments.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.allComments = payload;
                // console.log("comments fetched successfully.");
            })
            .addCase(fetchAllComments.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload || "Something went wrong.";
                // console.log("Failed to fetch comments:", state.error);
            });
    },
});

export const { setCommentsById, setallComments, setLoading, setError } = commentsSlice.actions;
export default commentsSlice.reducer;
