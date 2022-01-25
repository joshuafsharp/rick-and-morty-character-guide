import React from 'react';
import { Character, Info as ApiResponseInfo } from 'rickmortyapi/dist/interfaces';
import { SpeciesFacetOption } from '../filters/facets';

export interface CharactersFilters {
  species: SpeciesFacetOption | null;
}

export interface CharactersState {
  characters: Record<string, Character>;
  fetchingCharacters: boolean;
  paginationInfo: ApiResponseInfo<Character>['info'] & {
    currentPage: number;
  };
  filters: CharactersFilters;
  filterOverlayOpen: boolean;
  dispatch: React.Dispatch<ContextCharactersAction>;
}

export interface ContextStartFetchAllCharactersAction {
  type: 'START_FETCHING_ALL_CHARACTERS';
}

export interface ContextFetchAllCharactersAction {
  type: 'FETCH_ALL_CHARACTERS';
  payload: ApiResponseInfo<Character[]> & {
    currentPage: number;
  };
}

export interface ContextFetchCharacterAction {
  type: 'FETCH_CHARACTER';
  payload: Character;
}

export interface ContextToggleFilterOverlayAction {
  type: 'TOGGLE_FILTER_OVERLAY';
  payload: boolean;
}

export interface ContextApplyFilterAction {
  type: 'APPLY_FILTERS';
  payload: {
    facet: 'species';
    value: SpeciesFacetOption | null;
  };
}

export type ContextCharactersAction =
  | ContextStartFetchAllCharactersAction
  | ContextFetchAllCharactersAction
  | ContextFetchCharacterAction
  | ContextToggleFilterOverlayAction
  | ContextApplyFilterAction;
