import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postSlice';
import commentsReducer from '../features/posts/commentSlice';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        comments: commentsReducer
    },
});

export default store;
