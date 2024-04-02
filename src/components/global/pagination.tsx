import Link from "next/link";

// needed
// Total product count

function Pagination({
  limit,
  page,
  total,
}: {
  limit: number;
  page: number;
  total: number;
}) {
  const lastPage = Math.ceil(total / limit);

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px text-base h-10">
        <li>
          {page === 1 ? (
            <button
              disabled
              className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-300 bg-gray-700 border border-white rounded-l-lg  transition hover:text-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </button>
          ) : (
            <Link
              href={{
                pathname: "/shop",
                query: {
                  page: (page > 1 && page - 1) || 1,
                  limit,
                },
              }}
              className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-300 bg-gray-800 border border-white rounded-l-lg hover:bg-gray-700 transition hover:text-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </Link>
          )}
        </li>
        {/* Page 1 or not */}
        {page != 1 && (
          <li>
            <Link
              href={{
                pathname: "/shop",
                query: {
                  page: 1,
                  limit,
                },
              }}
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-300 bg-gray-800 border border-white hover:bg-gray-700 hover:text-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </Link>
          </li>
        )}
        {/* active */}
        <li>
          <Link
            href={{
              pathname: "/shop",
              query: {
                page: page || 2,
                limit,
              },
            }}
            aria-current="page"
            className="flex items-center justify-center px-4 h-10 text-white border border-white bg-primary   dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          >
            {page || 2}
          </Link>
        </li>
        {/* Page + 1 */}
        {lastPage < 2 || page < lastPage ? (
          <li>
            <Link
              href={{
                pathname: "/shop",
                query: {
                  page: page + 1 || 3,
                  limit,
                },
              }}
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-300 bg-gray-800 border border-white hover:bg-gray-700 hover:text-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {page + 1 || 3}
            </Link>
          </li>
        ) : null}
        {/* page + 10 */}
        {lastPage > page + 10 && (
          <li>
            <Link
              href={{
                pathname: "/shop",
                query: {
                  page: page + 10 || 10,
                  limit,
                },
              }}
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-300 bg-gray-800 border border-white hover:bg-gray-700 hover:text-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {page + 10 || 10}
            </Link>
          </li>
        )}
        <li>
          <span className="flex items-center justify-center px-4 h-10 leading-tight text-gray-300 bg-gray-800 border border-white   dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 ">
            ...{lastPage}
          </span>
        </li>
        {/* Next */}
        <li>
          {page === lastPage ? (
            <button
              disabled
              className="flex items-center cursor-pointer justify-center px-4 h-10 leading-tight text-gray-300 bg-gray-700 border border-white rounded-r-lg  hover:text-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </button>
          ) : (
            <Link
              href={{
                pathname: "/shop",
                query: {
                  page: (page < total && page + 1) || total,
                  limit,
                },
              }}
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-300 bg-gray-800 border border-white rounded-r-lg hover:bg-gray-700 hover:text-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
