import React, { useContext, useEffect } from 'react';
import { fetchAllCharacters } from '../state/actions';
import * as CharactersContext from '../state/context';
import FavouriteCharactersPreview from '../components/home/FavouriteCharactersPreview';

export default function HomePage() {
  const { characters, dispatch } = useContext(CharactersContext.CharactersContext);

  const initCharacters = async () => {
    dispatch({
      type: 'START_FETCHING_ALL_CHARACTERS',
    });

    const response = await fetchAllCharacters(1);

    dispatch({
      type: 'FETCH_ALL_CHARACTERS',
      payload: {
        ...response,
        currentPage: 1,
      },
    });
  };

  useEffect(() => {
    initCharacters();

    document.title = `All your favourite characters in one place! | Rick and Morty Character Guide`;
  }, []);

  const favouriteCharacters = Object.values(characters).slice(0, 5);

  return (
    <div className="p-8 lg:p-16">
      <h1 className="text-3xl font-semibold mb-8 text-gray-700">Rick and Morty Character Guide</h1>

      <p className="mb-4">
        <i>
          What, so everyone’s supposed to sleep every single night now? You realize that night time
          makes up half of all time?
        </i>{' '}
        - Rick Sanchez
      </p>

      {/* TODO: brief description */}

      <FavouriteCharactersPreview characters={favouriteCharacters} />
    </div>
  );
}
