function Comments({id}) {
  console.log(id);
    return (
        <div>
           <div className="h-0.5 w-full bg-gray-200 dark:bg-gray-700 my-6"></div>
            <footer className='flex justify-between items-center mb-2 ml-20'>
                <div className='flex items-center'>
                    <p className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold'>
                        <img className='mr-2 w-6 h-6 rounded-full' src='https://flowbite.com/docs/images/people/profile-picture-5.jpg' alt='Jese Leos' />
                        Jese Leos
                    </p>
                </div>
            </footer>
            <p className='ml-20 text-gray-500 dark:text-gray-400'>Much appreciated! Glad you liked it ☺️</p>
        </div>
    );
}

export default Comments;
