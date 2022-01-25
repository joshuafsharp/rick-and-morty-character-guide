import React, { useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import CharactersFilterButton from '../../components/character/FilterButton';
import CharacterList from '../../components/character/CharacterList';
import CharactersPagination from '../../components/character/Pagination';
import { fetchAllCharacters } from '../../state/actions';
import * as CharactersContext from '../../state/context';
import { SpeciesFacetOption } from '../../common/filters/facets';
import { CharactersFilters } from '../../common/types/characters';

export default function CharactersPage() {
  // Full page load requires fetching all the characters data

  const { characters, fetchingCharacters, dispatch } = useContext(
    CharactersContext.CharactersContext,
  );

  const [searchParams] = useSearchParams();

  const page = Number(searchParams.get('page')) ? Number(searchParams.get('page')) : 1;
  const species = searchParams.get('species');

  const initCharacters = async () => {
    let filters: CharactersFilters | undefined;
    if (species) {
      filters = {
        species: species as SpeciesFacetOption,
      };

      dispatch({
        type: 'APPLY_FILTERS',
        payload: {
          facet: 'species',
          value: filters.species,
        },
      });
    }

    const response = await fetchAllCharacters(page, filters);

    dispatch({
      type: 'FETCH_ALL_CHARACTERS',
      payload: {
        ...response,
        currentPage: page,
      },
    });
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

  return (
    <div className="p-8 lg:p-16">
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
