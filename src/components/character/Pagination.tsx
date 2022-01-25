import React, { useContext } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { CharactersContext } from "../../state/context";
import { PAGE_SIZE } from "../../common/constants";

export default function CharactersPagination() {
  const { paginationInfo } = useContext(CharactersContext);

  const currentPageFirstIndex = (paginationInfo.currentPage - 1) * PAGE_SIZE + 1;
  const currentPageLastIndex = Math.min(paginationInfo.currentPage * PAGE_SIZE, paginationInfo.count);

  const lastPage = Math.ceil(paginationInfo.count / PAGE_SIZE);

  return (
    // Mobile pagination buttons
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        {paginationInfo.prev ? (
          <a
            href={`/characters?page=${paginationInfo.currentPage - 1}`}
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Previous
          </a>
        ) : null}

        {paginationInfo.next ? (
          <a
            href={`/characters?page=${paginationInfo.currentPage + 1}`}
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Next
          </a>
        ) : null}
      </div>

      {/* Desktop pagination buttons and display. */}
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{currentPageFirstIndex}</span> to{" "}
            <span className="font-medium">{currentPageLastIndex}</span> of{" "}
            <span className="font-medium">{paginationInfo.count}</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            {paginationInfo.prev ? (
              <a
                href={`/characters?page=${paginationInfo.currentPage - 1}`}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </a>
            ) : null}
            <a
              href="/characters?page=1"
              aria-current="page"
              className={`${
                paginationInfo.currentPage === 1
                  ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600"
                  : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
              } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
            >
              1
            </a>
            <a
              href="/characters?page=2"
              className={`${
                paginationInfo.currentPage === 2
                  ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600"
                  : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
              } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
            >
              2
            </a>
            <a
              href="/characters?page=3"
              className={`${
                paginationInfo.currentPage === 3
                  ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600"
                  : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
              } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
              ...
            </span>
            <a
              href={`/characters?page=${lastPage}`}
              className={`${
                paginationInfo.currentPage === lastPage
                  ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600"
                  : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
              } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
            >
              {lastPage}
            </a>

            {paginationInfo.next ? (
              <a
                href={`/characters?page=${paginationInfo.currentPage + 1}`}
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </a>
            ) : null}
          </nav>
        </div>
      </div>
    </div>
  );
}
