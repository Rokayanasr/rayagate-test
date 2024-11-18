import { useEffect } from "react";
import PostCard from "./PostCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "../features/posts/postSlice";
function Posts() {
    const { allPosts, loading, error } = useSelector((state) => state.posts);
    console.log({ allPosts, loading, error });
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllPosts());
    }, [dispatch]);
    return (
        <div className='grid gap-4 dark:bg-gray-900 my-container grid-cols-1 justify-center'>
            <section className='bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased'>
                <div className='max-w-5xl mx-auto px-4'>
                    <div className='flex justify-between items-center mb-6'>
                        <h2 className='text-lg lg:text-2xl font-bold text-gray-900 dark:text-white'>Posts (20)</h2>
                    </div>
                    {allPosts.map((post) => (
                        <PostCard key={post.id} post={post}></PostCard>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Posts;
