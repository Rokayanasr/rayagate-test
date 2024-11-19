/* eslint-disable react/prop-types */

function Comments({ comment }) {
    // split email to get username
    const firstName = comment.email.split("@")[0];
    // console.log(comment);
    return (
        <div className="bg-white dark:bg-[#4b55636a] p-4 rounded-md">
            <div className='grid grid-rows-1 gap-3'>
                <h2 className='text-base col-span-1 text-gray-900 dark:text-white underline hover:dark:text-blue-500 cursor-pointer font-bold'>{firstName}</h2>
                <footer className='flex flex-col col-span-3 justify-start items-start'>
                    <p className='inline-flex mr-3 text-sm text-gray-900 dark:text-white font-semibold'>{comment.name}</p>
                    <p className=' text-gray-500 dark:text-gray-400'>{comment.body}</p>
                </footer>
            </div>
        </div>
    );
}

export default Comments;
