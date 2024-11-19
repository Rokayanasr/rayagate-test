import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "../features/posts/postSlice";
import Pagination from "../components/Pagination";
import SkeletonLoader from "../components/SkeletonLoader";
function Posts() {
    const dispatch = useDispatch();
    // get posts from redux state
    const { allPosts, loading, error } = useSelector((state) => state.posts);
    // search state for handling automatic search
    const [search, setSearch] = useState("");
    // pagination state , get the page number from local storage in order not to reset it when refresh
    const [currentPage, setCurrentPage] = useState(() => parseInt(localStorage.getItem("currentPage")) || 1);
    const postPerPage = 8;
    // ex: 2 * 10 = 20
    const lastPostIndex = currentPage * postPerPage;
    // ex: 20-10 = 10
    const firstPostIndex = lastPostIndex - postPerPage;
    // get current posts
    const currentPosts = allPosts.slice(firstPostIndex, lastPostIndex);
    const handleSearch = (e) => {
        setSearch(e);
        // console.log(e);
    };

    useEffect(() => {
        // set page number in local storage to save it when refresh
        localStorage.setItem("currentPage", currentPage);
        dispatch(fetchAllPosts());
    }, [dispatch, currentPage]);

    return (
        <>
            {/* search */}
            <div className='max-w-3xl mx-auto lg:py-8 py-4 px-4'>
                <div className='relative flex items-center'>
                    <input
                        onChange={(e) => handleSearch(e.target.value)}
                        type='search'
                        id='search'
                        className='w-full p-4 pl-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='Search posts...'
                    />
                    <div className='absolute left-3 inset-y-0 flex items-center pointer-events-none'>
                        <svg className='w-5 h-5 text-gray-500 dark:text-gray-400' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'>
                            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z' />
                        </svg>
                    </div>
                </div>
            </div>

            <div className='grid gap-4 dark:bg-gray-900 grid-cols-1 justify-center'>
                <section className='bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased'>
                    <div className='max-w-5xl mx-auto px-4'>
                        <div className='flex justify-between items-center mb-6'>
                            <h2 className='text-lg lg:text-2xl font-bold text-gray-900 dark:text-white'>Posts ({allPosts.length})</h2>
                        </div>
                        {loading
                            ? Array.from({ length: postPerPage }).map((_, index) => <SkeletonLoader key={index} />)
                            : search == ""
                            ? currentPosts.map((post) => (
                                  <div key={post.id} className='divide-gray-700 divide-y'>
                                      <PostCard post={post}></PostCard>
                                      <hr />
                                  </div>
                              ))
                            : allPosts
                                  .filter((post) => post.title.toLowerCase().includes(search.toLowerCase()))
                                  .map((post) => (
                                      <div key={post.id} className='divide-gray-700 divide-y'>
                                          <PostCard post={post}></PostCard>
                                          <hr />
                                      </div>
                                  ))}
                    </div>
                </section>
            </div>

            {
                // pagination
                <Pagination totalPosts={allPosts.length} postPerPage={postPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage}></Pagination>
            }
        </>
    );
}

export default Posts;
