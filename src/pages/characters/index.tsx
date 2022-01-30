import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import CharactersFilterButton from '../../components/character/FilterButton';
import CharacterList from '../../components/character/CharacterList';
import CharactersPagination from '../../components/character/Pagination';
import { fetchAllCharacters } from '../../state/actions';
import * as CharactersContext from '../../state/context';
import { SpeciesFacetOption } from '../../common/filters/facets';
import { CharactersFilters } from '../../common/types/characters';
import { AppError } from '../../common/error';

export default function CharactersPage(): JSX.Element {
  const { characters, fetchingCharacters, filters, dispatch } = useContext(
    CharactersContext.CharactersContext,
  );

  const [searchParams] = useSearchParams();

  // Message to display if there is an error when fetching characters
  const [errorMessage, setErrorMessage] = useState(null);

  const page = Number(searchParams.get('page')) ? Number(searchParams.get('page')) : 1;
  const species = searchParams.get('species');

  const params = new URLSearchParams(window.location.search);
  if (filters.species && filters.species !== species) {
    params.set('species', filters.species);
  }

  window.history.replaceState({}, '', `${window.location.pathname}?${params}`);

  const initCharacters = async () => {
    let updatedFilters: CharactersFilters | undefined;
    if (species) {
      updatedFilters = {
        species: species as SpeciesFacetOption,
      };

      dispatch({
        type: 'APPLY_FILTERS',
        payload: {
          facet: 'species',
          value: updatedFilters.species,
        },
      });
    }

    try {
      const response = await fetchAllCharacters(page, updatedFilters);

      dispatch({
        type: 'FETCH_ALL_CHARACTERS',
        payload: {
          ...response,
          currentPage: page,
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

    document.title = `All the Characters | Rick and Morty Character Guide`;
  }, [page, species]);

  const breadcrumbLinks = [
    {
      label: 'Characters',
      path: '/characters',
    },
  ];

  /**
   * TODO: Ideally we would have an error component to better render
   * reusable error messages with styling.
   */
  if (errorMessage) {
    return <div className="flex justify-center items-center h-screen">{errorMessage}</div>;
  }

  return (
    <div className="px-4 py-8 lg:py-16">
      <Breadcrumbs links={breadcrumbLinks} />

      <div className="flex flex-col sm:flex-row sm:justify-between">
        <h1 className="mb-8 text-3xl font-semibold text-gray-700">Characters</h1>

        <CharactersFilterButton />
      </div>
      {fetchingCharacters ? (
        <div className="flex justify-center mt-10">Loading...</div>
      ) : (
        <>
          <CharacterList characters={Object.values(characters)} />

          <CharactersPagination />
        </>
      )}
    </div>
  );
}
