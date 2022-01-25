import React from 'react';
import { Link } from 'react-router-dom';
import { Character } from 'rickmortyapi/dist/interfaces';

export interface CharacterListItemProps {
  character: Character;
}

export default function CharacterListItem({ character }: CharacterListItemProps): JSX.Element {
  return (
    <li
      key={character.id}
      className="col-span-1 text-center bg-white rounded-lg shadow divide-y divide-gray-200"
    >
      <Link to={`/characters/${character.id}`}>
        <div className="flex-1 flex flex-col h-full p-8">
          <img
            className="w-32 h-32 flex-shrink-0 mx-auto rounded-full mb-6"
            src={character.image}
            alt={character.name}
          />

          <h3 className="text-gray-900 text-sm font-medium mb-4 flex-grow">{character.name}</h3>

          <span
            className={` self-center justify-self-end w-auto px-2.5 py-0.5 rounded-full text-xs font-medium ${
              character.species === 'Human'
                ? 'bg-blue-100 text-blue-800'
                : 'bg-green-100 text-green-800'
            }`}
          >
            {character.species}
          </span>
        </div>
      </Link>
    </li>
  );
}
