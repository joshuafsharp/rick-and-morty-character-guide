import React, { createContext, useMemo, useReducer } from "react";
import CharactersReducer from "./CharactersReducer";
// eslint-disable-next-line import/extensions
import { CharactersState } from "~/common/types/characters";

// Initial State
export const initialState: CharactersState = {
  characters: {},
};

// Create Context
export const CharactersContext = createContext(initialState);

// Provider Component
// export function CharactersProvider({ children }: any) {
//   const [state, dispatch] = useReducer(CharactersReducer, initialState);

//   // Actions
//   const fetchAllCharacters = () => {
//     dispatch({
//       type: "FETCH_ALL_CHARACTERS",
//       payload: 
//     });
//   };

//   const fetchCharacter = (id: string) => {
//     dispatch({
//       type: "FETCH_CHARACTER",
//       payload: id,
//     });
//   };

//   const charactersContextProvider = useMemo(
//     () => ({
//       characters: state.characters,
//       fetchAllCharacters,
//       fetchCharacter,
//     }),
//     []
//   );

//   return (
//     <CharactersContext.Provider value={charactersContextProvider}>
//       {children}
//     </CharactersContext.Provider>
//   );
// }
