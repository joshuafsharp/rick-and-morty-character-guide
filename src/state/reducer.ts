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
     * Fetch all the characters
     *
     * Returns the character object if it exists, or `null` otherwise.
     */
    case "FETCH_ALL_CHARACTERS": {
      return {
        ...state,
        characters: keyBy(action.payload, "id"),
      };
    }

    /**
     * Fetch a single character by id.
     *
     * Returns the character object if it exists, or `null` otherwise.
     */
    case "FETCH_CHARACTER": {
      console.log(action.payload)
      const updatedState = cloneDeep(state);
      updatedState.characters[action.payload.id] = action.payload;

      return updatedState;
    }

    default:
      return state;
  }
};
