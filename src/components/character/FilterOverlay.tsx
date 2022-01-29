import { XIcon } from '@heroicons/react/solid';
import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { fetchAllCharacters } from '../../state/actions';
import { SpeciesFacetOption, speciesFacetOptions } from '../../common/filters/facets';
import { CharactersContext } from '../../state/context';

interface FormData {
  facetValuesSelections: { species: SpeciesFacetOption };
}

export default function CharactersFilterOverlay(): JSX.Element {
  const { filters, dispatch } = useContext(CharactersContext);

  const initialFormData: FormData = {
    facetValuesSelections: {
      species: filters.species,
    },
  };

  const [formData, setFormData] = useState(initialFormData);

  const inputOnChange = (event: ChangeEvent<HTMLInputElement>, facetOption: SpeciesFacetOption) => {
    const selectedSpeciesOption = event.target.checked ? facetOption : null;

    const updatedFormData: FormData = {
      facetValuesSelections: {
        species: selectedSpeciesOption,
      },
    };

    setFormData((existingFormData) => ({
      ...existingFormData,
      ...updatedFormData,
    }));
  };

  /**
   * User requested closing the overlay, either exiting
   * or via form submission.
   */
  const closeFilterOverlay = () => {
    dispatch({
      type: 'TOGGLE_FILTER_OVERLAY',
      payload: false,
    });
  };

  /**
   * Apply the selected filters and close the overlay.
   */
  const applyFilters = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch({
      type: 'APPLY_FILTERS',
      payload: {
        facet: 'species',
        value: formData.facetValuesSelections.species,
      },
    });

    const page = 1;

    const response = await fetchAllCharacters(
      page,
      formData.facetValuesSelections.species ? formData.facetValuesSelections : undefined,
    );

    dispatch({
      type: 'FETCH_ALL_CHARACTERS',
      payload: {
        ...response,
        currentPage: page,
      },
    });

    closeFilterOverlay();
  };

  return (
    <aside className="fixed z-30 inset-0">
      <div className="absolute z-40 right-0 inset-y-0 bg-white border-l">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-medium text-gray-700">Filter</h2>

          <button
            type="button"
            onClick={closeFilterOverlay}
            className="text-gray-700 hover:text-gray-500"
          >
            <XIcon className="flex-shrink-0 h-5 w-5" />
          </button>
        </div>

        <form onSubmit={(event) => applyFilters(event)} className="p-4">
          <fieldset>
            <legend className="mb-2 text-gray-500 font-medium">Species</legend>

            {speciesFacetOptions.map((facetOption) => (
              <div key={facetOption}>
                <label htmlFor={`facet-${facetOption}`} className="inline-block w-full py-1">
                  <input
                    type="radio"
                    id={`facet-${facetOption}`}
                    checked={formData.facetValuesSelections.species === facetOption}
                    className="mr-2"
                    onChange={(event) => inputOnChange(event, facetOption)}
                  />
                  {facetOption}
                </label>
              </div>
            ))}
          </fieldset>

          <button
            type="submit"
            className="w-full h-10 mt-4 border font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            Apply Filters
          </button>
        </form>
      </div>

      {/* eslint-disable */}
      <div
        role="generic"
        className="absolute bg-black opacity-20 inset-0"
        onClick={closeFilterOverlay}
      />
    </aside>
  );
}
