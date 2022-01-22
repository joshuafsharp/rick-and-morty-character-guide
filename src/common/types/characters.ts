import { Character } from "rickmortyapi/dist/interfaces";

export interface CharactersState {
  characters: { [id: string]: Character };
}

export type ContextActionType = "FETCH_CHARACTERS" | "FETCH_CHARACTER";

export interface ContextFetchAllCharactersAction {
  type: "FETCH_ALL_CHARACTERS";
  // TODO: payload page, pagesize=50
  payload: Character[];
}

export interface ContextFetchCharacterAction {
  type: "FETCH_CHARACTER";
  payload: Character;
}

export type ContextCharactersAction =
  | ContextFetchAllCharactersAction
  | ContextFetchCharacterAction;
