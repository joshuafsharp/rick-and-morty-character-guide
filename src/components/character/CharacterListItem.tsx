// TODO: Display a single character list item
import React from 'react';
import { Link } from 'react-router-dom';
import { Character } from 'rickmortyapi/dist/interfaces';

export default function CharacterListItem({character}: {character: Character}) {
    return (
        <li
          key={character.id}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
        >
            <Link to={`/characters/${character.id}`}>
                
          <div className="flex-1 flex flex-col p-8">
            <img
              className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
              src={character.image}
              alt=""
              />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">
              {character.name}
            </h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Title</dt>
              {/* <dd className="text-gray-500 text-sm">{character.title}</dd> */}
              <dt className="sr-only">Role</dt>
              {/* <dd className="mt-3">
                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                {character.role}
                </span>
            </dd> */}
            </dl>
          </div>
            </Link>
        </li>
    )
}