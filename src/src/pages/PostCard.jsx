/* eslint-disable react/prop-types */
import { useState } from "react";
import PostDetails from "./PostDetails";

function PostCard({ post }) {
    // modal state
    const [isModalOpen, setIsModalOpen] = useState(false);

    // function to toggle modal
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div className='mb-4'>
            <article className='p-6 text-base bg-white rounded-lg dark:bg-gray-900'>
                <footer className='flex justify-between items-center mb-2'>
                    <div className='flex items-center'>
                        <p className='inline-flex items-center mr-3 text-lg text-gray-900 dark:text-white font-semibold'>
                            <img className='mr-2 w-6 h-6 rounded-full' src='https://flowbite.com/docs/images/people/profile-picture-2.jpg' alt={`${post.title} author's profile`} />
                            {post.title}
                        </p>
                    </div>
                </footer>
                <p className='text-gray-500 text-base dark:text-gray-400'>{post.body}</p>
                <div className='flex items-center mt-4 space-x-4'>
                    {post.id && (
                        <button type='button' className='flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium' onClick={toggleModal}>
                            <svg className='mr-1.5 w-3.5 h-3.5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 18'>
                                <path
                                    stroke='currentColor'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z'
                                />
                            </svg>
                            Read Comments
                        </button>
                    )}
                </div>
            </article>

            {/* Modal */}
            {isModalOpen && (
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm' onClick={toggleModal}>
                    <div
                        className='bg-white dark:bg-gray-800 rounded-lg p-6 w-4/5 sm:w-3/5 lg:w-2/3 max-h-[90vh] overflow-y-auto'
                        onClick={(e) => e.stopPropagation()}
                        tabIndex='0'
                    >
                        <PostDetails id={post.id} />
                        <div className='mt-4 flex justify-end'>
                            <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500' onClick={toggleModal}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PostCard;
