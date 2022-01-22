import React from "react";
import { Link } from "react-router-dom";
import { Character } from "rickmortyapi/dist/interfaces";
import CharacterList from "../character/CharacterList";

export default function FavouriteCharactersPreview({characters}: {
  characters: Character[];
}) {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-xl">Fan Favourites</h2>

        <Link to="characters" className="font-medium text-blue-600 hover:text-blue-400">
          View all
        </Link>
      </div>

      <CharacterList characters={characters} />
    </>
  );
}