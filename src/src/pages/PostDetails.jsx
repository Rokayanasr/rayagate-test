import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import { setPostById } from "../features/posts/postSlice";
import Comments from "../components/Comments";
import { fetchAllComments, setCommentsById } from "../features/posts/commentSlice";

function PostDetails({ id }) {
    console.log(id);
    // const { id } = useParams(); // Extract the post ID from the URL
    const dispatch = useDispatch();
    const post = useSelector((state) => state.posts.post);
    const comments = useSelector((state) => state.comments.comments);
    const getComments = () => dispatch(setCommentsById(id));
    console.log(post);
    useEffect(() => {
        if (id) {
            dispatch(setPostById(id));
        }
        dispatch(fetchAllComments());
    }, [dispatch, id]);

    if (!post) {
        return (
            <div className='my-container'>
                <p className='text-center text-gray-500'>Loading post details...</p>
            </div>
        );
    }

    return (
      <>
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
                <button onClick={getComments} type='button' className='flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium'>
                    <svg className='mr-1.5 w-3.5 h-3.5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 18'>
                        <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z'
                        />
                    </svg>
                    MORE
                </button>
            </div>
        </article>
        {
          comments.map((comment) => (
            <Comments key={comment.id} comment={comment}></Comments>
          ))
        }
        </>
    );
}

export default PostDetails;
