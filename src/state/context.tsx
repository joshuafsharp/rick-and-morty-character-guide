import React, { createContext, useReducer } from "react";
import * as CharactersReducer from "./reducer";
import { CharactersState } from "../common/types/characters";

// Initial State
export const initialState: CharactersState = {
  characters: {},
  fetchingCharacters: false,
  paginationInfo: {
    count: 0,
    currentPage: 1,
    pages: 0,
    prev: null,
    next: null,
  },
  dispatch: () => undefined,
};

// Create Context
export const CharactersContext = createContext<CharactersState>(initialState);

export function ContextProvider({ children }: any) {
  const [state, dispatch] = useReducer(CharactersReducer.default, initialState);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CharactersContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CharactersContext.Provider>
  );
}
