
/* eslint-disable react/prop-types */
function Pagination({ totalPosts, postPerPage, currentPage, setCurrentPage }) {
    // get number of pages by dividing total posts by posts per page and approximate the result to the nearest integer
    const pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
      // Create an array of page numbers
        pages.push(i);
    }
  
    return (
        <div className='flex flex-wrap justify-center gap-2 mb-4'>
            {pages.map((page, index) => (
                <button key={index} onClick={() => setCurrentPage(page)} // Set the current page when button is clicked
                    className={`px-4 py-2 text-xs sm:text-sm font-medium border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1
                    ${currentPage === page ? "text-white bg-blue-500 border-blue-500 focus:ring-blue-600" : "text-gray-700 bg-white border-gray-300 hover:bg-blue-100 hover:text-blue-500"}`}>
                    {page}
                </button>
            ))}
        </div>
    );
}

export default Pagination;
