import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_API_URL = "https://jsonplaceholder.typicode.com/";

const initialState = {
    allPosts: [],
    loading: false,
    error: null,
    post: {},
};

// Async thunk for fetching all posts
export const fetchAllPosts = createAsyncThunk("posts/fetchAllPosts", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${BASE_API_URL}posts`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setAllPosts(state, { payload }) {
            state.allPosts = payload;
        },
        setLoading(state, { payload }) {
            state.loading = payload;
        },
        setError(state, { payload }) {
            state.error = payload;
        },
        setPostById(state, { payload }) {
            // if the id cames in the payload == the id of the post returned
            state.post = state.allPosts.find((post) => post.id == payload);
            console.log("post by id" + state.post);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllPosts.pending, (state) => {
                state.loading = true;
                console.log("Fetching posts...");
            })
            .addCase(fetchAllPosts.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.allPosts = payload;
                console.log("Posts fetched successfully.");
            })
            .addCase(fetchAllPosts.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload || "Something went wrong.";
                console.log("Failed to fetch posts:", state.error);
            });
    },
});

export const { setPostById, setAllPosts, setLoading, setError } = postSlice.actions;
export default postSlice.reducer;
