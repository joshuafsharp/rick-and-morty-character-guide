import { keyBy } from "lodash";
// eslint-disable-next-line import/extensions
import { CharactersState, ContextCharactersAction } from "~/common/types/characters";


export default (state: CharactersState, action: ContextCharactersAction): CharactersState => {
  switch (action.type) {
    /**
     * Fetch all the characters
     * 
     * Returns the character object if it exists, or `null` otherwise.
     */
    case "FETCH_ALL_CHARACTERS": {
      console.log('fetching all characters')


      console.log(JSON.stringify(action.payload))

      return {
        ...state,
        characters: keyBy(action.payload, 'id'),

      };
    }

    /**
     * Fetch a single character by id.
     * 
     * Returns the character object if it exists, or `null` otherwise.
     */
    case "FETCH_CHARACTER": {
    return state;
    }

    default:
      return state;
  }
};
