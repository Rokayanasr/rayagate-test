import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../features/posts/postSlice';

const store = configureStore({
    reducer: {
        auth: postReducer,
    },
});

export default store;
