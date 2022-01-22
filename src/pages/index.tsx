import React, { useEffect, useReducer } from "react";
import { fetchAllCharacters } from "../contexts/actions";
import * as CharactersProvider from "../contexts/CharactersContext";
import * as CharactersReducer from "../contexts/CharactersReducer";
import FavouriteCharactersPreview from '../components/home/FavouriteCharactersPreview';

export default function HomePage() {
  // const { characters, fetchAllCharacters } = useContext(CharactersProvider.CharactersContext);
  const [state, dispatch] = useReducer(CharactersReducer.default, CharactersProvider.initialState);

  const initCharacters = async () => {
    const response = await fetchAllCharacters();
    
    dispatch({
      type: "FETCH_ALL_CHARACTERS",
      payload: response.results
    })
  }
  
  useEffect(() => {
    initCharacters();
    
    document.title = `All your favourite characters in one place! | Rick and Morty Character Guide`;
  }, []);

  const favouriteCharacters = Object.values(state.characters).slice(0, 5)

  return (
    <div className="p-8 lg:p-16">
      <h1 className="text-3xl font-semibold mb-8 text-gray-700">
        Rick and Morty Character Guide
      </h1>

      <p className="mb-4">
        <i>
          What, so everyone’s supposed to sleep every single night now? You
          realize that nighttime makes up half of all time?
        </i>{" "}
        - Rick Sanchez
      </p>

      {/* TODO: brief description */}

      <FavouriteCharactersPreview characters={favouriteCharacters} />
    </div>
  );
}
