function SkeletonLoader() {
    return (
      <div className="border border-gray-300 dark:border-gray-600 shadow rounded-md p-4 max-w-5xl w-full mx-auto bg-white dark:bg-gray-800">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-gray-300 dark:bg-gray-600 h-10 w-10" />
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded" />
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded col-span-2" />
                <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded col-span-1" />
              </div>
              <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default SkeletonLoader;
  