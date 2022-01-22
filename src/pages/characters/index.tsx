import React, { useEffect, useReducer } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import CharacterList from "../../components/character/CharacterList";
import { fetchAllCharacters } from "../../contexts/actions";
import * as CharactersProvider from "../../contexts/CharactersContext";
import * as CharactersReducer from "../../contexts/CharactersReducer";

export default function CharactersPage() {
  // Full page load requires fetching all the characters data

  const [state, dispatch] = useReducer(
    CharactersReducer.default,
    CharactersProvider.initialState
  );

  const initCharacters = async () => {
    const response = await fetchAllCharacters();

    dispatch({
      type: "FETCH_ALL_CHARACTERS",
      payload: response.results,
    });
  };

  useEffect(() => {
    initCharacters();

    document.title = `All the Characters | Rick and Morty Character Guide`;
  }, []);

  return (
    <div className="p-8 lg:p-16">
      <Breadcrumbs />

      <h1 className="mb-8 text-3xl font-semibold text-gray-900">Characters</h1>

      <CharacterList characters={Object.values(state.characters)} />
    </div>
  );
}
