import { cloneDeep, keyBy } from "lodash";
import {
  CharactersState,
  ContextCharactersAction,
} from "../common/types/characters";

export default (
  state: CharactersState,
  action: ContextCharactersAction
): CharactersState => {
  switch (action.type) {
    /**
     * Initiate the fetching of all the characters.
     * 
     * Allows loading state to be managed while fetching.
     */
    case "START_FETCHING_ALL_CHARACTERS": {
      return {
        ...state,
        fetchingCharacters: true,
      }
    }

    /**
     * Fetch all the characters
     *
     * Returns the character object if it exists, or `null` otherwise.
     */
    case "FETCH_ALL_CHARACTERS": {
      return {
        ...state,
        characters: keyBy(action.payload.results, "id"),
        paginationInfo: {
          ...action.payload.info,
          currentPage: action.payload.currentPage
        },
        fetchingCharacters: false,
      };
    }

    /**
     * Fetch a single character by id.
     *
     * Returns the character object if it exists, or `null` otherwise.
     */
    case "FETCH_CHARACTER": {
      const updatedState = cloneDeep(state);
      updatedState.characters[action.payload.id] = action.payload;

      return updatedState;
    }

    default:
      return state;
  }
};
