import React, { useEffect, useReducer } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import CharacterList from "../../components/character/CharacterList";
import { fetchAllCharacters } from "../../state/actions";
import * as CharactersContext from "../../state/context";
import * as CharactersReducer from "../../state/reducer";

export default function CharactersPage() {
  // Full page load requires fetching all the characters data

  const [state, dispatch] = useReducer(
    CharactersReducer.default,
    CharactersContext.initialState
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

  const breadcrumbLinks = [
    {
      label: 'Characters',
      path: '/characters'
    }
  ]

  return (
    <div className="p-8 lg:p-16">
      <Breadcrumbs links={breadcrumbLinks}/>

      <h1 className="mb-8 text-3xl font-semibold text-gray-900">Characters</h1>

      <CharacterList characters={Object.values(state.characters)} />
    </div>
  );
}
