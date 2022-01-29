import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllCharacters } from '../state/actions';
import * as CharactersContext from '../state/context';
import FavouriteCharactersPreview from '../components/home/FavouriteCharactersPreview';
import { AppError } from '../common/error';

export default function HomePage(): JSX.Element {
  const { characters, dispatch } = useContext(CharactersContext.CharactersContext);

  const [errorMessage, setErrorMessage] = useState(null);

  const initCharacters = async () => {
    dispatch({
      type: 'START_FETCHING_ALL_CHARACTERS',
    });

    try {
      const response = await fetchAllCharacters(1);

      dispatch({
        type: 'FETCH_ALL_CHARACTERS',
        payload: {
          ...response,
          currentPage: 1,
        },
      });
    } catch (error) {
      if (error instanceof AppError) {
        setErrorMessage(error.message);
      }
    }
  };

  useEffect(() => {
    initCharacters();

    document.title = `All your favourite characters in one place! | Rick and Morty Character Guide`;
  }, []);

  const favouriteCharacters = Object.values(characters ?? []).slice(0, 5);

  return (
    <div className="p-8 lg:p-16">
      <h1 className="text-3xl font-semibold mb-8 text-gray-700">Rick and Morty Character Guide</h1>

      <p className="mb-4">
        <i>
          &quot;What, so everyone’s supposed to sleep every single night now? You realize that night
          time makes up half of all time?&quot;
        </i>{' '}
        - Rick Sanchez
      </p>

      {errorMessage ? (
        <Link to="/characters" className="font-medium text-blue-600 hover:text-blue-400">
          View all characters
        </Link>
      ) : (
        <FavouriteCharactersPreview characters={favouriteCharacters} />
      )}
    </div>
  );
}
