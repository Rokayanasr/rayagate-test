/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import { setPostById } from "../features/posts/postSlice";
import Comments from "../components/Comments";
import { fetchAllComments } from "../features/posts/commentSlice";

function PostDetails({ id }) {
    console.log(id);
    // const { id } = useParams(); // Extract the post ID from the URL
    const dispatch = useDispatch();
    // get posts from redux state
    const allComments = useSelector((state) => state.comments.allComments);
    // console.log(allComments);

    // get single post from redux state
    const post = useSelector((state) => state.posts.post);
    // console.log(post);

    // filter comments by post id
    const currentComments = allComments.filter((comment) => comment.postId == post.id);
    useEffect(() => {
        if (id) {
            // set post by id
            dispatch(setPostById(id));
            // fetch comments
            dispatch(fetchAllComments());
        }
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
            <article className='p-6 text-base bg-white rounded-lg dark:bg-gray-900 mb-8'>
                <footer className='flex justify-between items-center mb-2'>
                    <div className='flex items-center'>
                        <p className='inline-flex items-center mr-3 text-lg text-gray-900 dark:text-white font-semibold'>
                            <img className='mr-2 w-6 h-6 rounded-full' src='https://flowbite.com/docs/images/people/profile-picture-2.jpg' alt={`${post.title} author's profile`} />
                            {post.title}
                        </p>
                    </div>
                </footer>
                <p className='text-gray-500 text-base dark:text-gray-400'>{post.body}</p>
            </article>
            <h2 className='lg:ml-28 text-xl mb-4 text-gray-900 md:text-start text-center font-extrabold dark:text-white bg-white dark:bg-gray-800'>Comments({currentComments.length})</h2>
            <div className='flex flex-col gap-4'>
                {/* comments */}
                {currentComments.map((comment) => (
                    <div className='lg:ml-32 text-base py-2 md:px-5 rounded-md divide-gray-700 divide-y' key={comment.id}>
                        <Comments comment={comment}></Comments>
                        <hr className='h-[1.5px] w-full bg-gray-200 dark:bg-gray-700 mt-4'></hr>
                    </div>
                ))}
            </div>
        </>
    );
}

export default PostDetails;
