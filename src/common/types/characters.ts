import React from "react";
import { Character, Info as ApiResponseInfo } from "rickmortyapi/dist/interfaces";

export interface CharactersState {
  characters: { [id: string]: Character };
  fetchingCharacters: boolean;
  paginationInfo: ApiResponseInfo<Character>["info"] & {
    currentPage: number;
  };
  dispatch: React.Dispatch<ContextCharactersAction>;
}


export interface ContextStartFetchAllCharactersAction {
  type: "START_FETCHING_ALL_CHARACTERS";
}

export interface ContextFetchAllCharactersAction {
  type: "FETCH_ALL_CHARACTERS";
  payload: ApiResponseInfo<Character[]> & {
    currentPage: number;
  };
}

export interface ContextFetchCharacterAction {
  type: "FETCH_CHARACTER";
  payload: Character;
}

export type ContextCharactersAction =
  | ContextStartFetchAllCharactersAction
  | ContextFetchAllCharactersAction
  | ContextFetchCharacterAction;
