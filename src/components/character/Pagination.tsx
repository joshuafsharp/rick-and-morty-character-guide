import React, { useContext } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import { CharactersContext } from '../../state/context';
import { PAGE_SIZE } from '../../common/constants';

export default function CharactersPagination(): JSX.Element {
  const { paginationInfo, filters } = useContext(CharactersContext);

  const currentPageFirstIndex = (paginationInfo.currentPage - 1) * PAGE_SIZE + 1;
  const currentPageLastIndex = Math.min(
    paginationInfo.currentPage * PAGE_SIZE,
    paginationInfo.count,
  );

  const lastPage = Math.ceil(paginationInfo.count / PAGE_SIZE);

  const filtersQuery = filters.species ? `&species=${filters.species}` : '';

  return (
    // Mobile pagination buttons
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        {paginationInfo.prev ? (
          <Link
            to={`/characters?page=${paginationInfo.currentPage - 1}${filtersQuery}`}
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Previous
          </Link>
        ) : null}

        {paginationInfo.next ? (
          <Link
            to={`/characters?page=${paginationInfo.currentPage + 1}${filtersQuery}`}
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Next
          </Link>
        ) : null}
      </div>

      {/* Desktop pagination buttons and display. */}
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{currentPageFirstIndex}</span> to{' '}
            <span className="font-medium">{currentPageLastIndex}</span> of{' '}
            <span className="font-medium">{paginationInfo.count}</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            {paginationInfo.prev ? (
              <Link
                to={`/characters?page=${paginationInfo.currentPage - 1}${filtersQuery}`}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </Link>
            ) : null}

            <Link
              to={`/characters?page=1${filtersQuery}`}
              aria-current="page"
              className={`${
                paginationInfo.currentPage === 1
                  ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                  : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
              } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
            >
              1
            </Link>

            <Link
              to={`/characters?page=2${filtersQuery}`}
              className={`${
                paginationInfo.currentPage === 2
                  ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                  : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
              } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
            >
              2
            </Link>

            <Link
              to={`/characters?page=3${filtersQuery}`}
              className={`${
                paginationInfo.currentPage === 3
                  ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                  : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
              } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
            >
              3
            </Link>

            <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
              ...
            </span>

            <Link
              to={`/characters?page=${lastPage}${filtersQuery}`}
              className={`${
                paginationInfo.currentPage === lastPage
                  ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                  : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
              } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
            >
              {lastPage}
            </Link>

            {paginationInfo.next ? (
              <Link
                to={`/characters?page=${paginationInfo.currentPage + 1}${filtersQuery}`}
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </Link>
            ) : null}
          </nav>
        </div>
      </div>
    </div>
  );
}
