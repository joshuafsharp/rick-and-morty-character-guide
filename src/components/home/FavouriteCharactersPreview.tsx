import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Character } from "rickmortyapi/dist/interfaces";
import { CharactersContext } from "../../state/context";
import CharacterList from "../character/CharacterList";

export default function FavouriteCharactersPreview({
  characters,
}: {
  characters: Character[];
}) {
  const { fetchingCharacters } = useContext(CharactersContext);

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-xl text-gray-700">Fan Favourites</h2>

        <Link
          to="characters"
          className="font-medium text-blue-600 hover:text-blue-400"
        >
          View all
        </Link>
      </div>

      {fetchingCharacters ? (
        <div className="flex justify-center mt-10">Loading...</div>
      ) : (
        <CharacterList characters={characters} />
      )}
    </>
  );
}
