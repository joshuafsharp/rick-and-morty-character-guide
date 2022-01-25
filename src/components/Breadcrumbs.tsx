import React from 'react';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import { BreadcrumbLink } from '../common/types/link';

export interface BreadcrumbsProps {
  links: BreadcrumbLink[];
}

export default function Breadcrumbs({ links }: BreadcrumbsProps): JSX.Element {
  return (
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        <li>
          <div>
            <Link to="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>

        {links.map((link) => (
          <li key={link.label}>
            <div className="flex items-center">
              <ChevronRightIcon
                className="flex-shrink-0 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <Link
                to={link.path}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current={window.location.pathname === link.path ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
