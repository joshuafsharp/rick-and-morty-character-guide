import React from "react";
import { Character } from "rickmortyapi/dist/interfaces";
import CharacterListItem from "./CharacterListItem";

export default function CharacterList({
  characters,
}: {
  characters: Character[];
}) {
  return (
    <ul
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {characters.map((character) => (
        <CharacterListItem key={character.id} character={character} />
      ))}
    </ul>
  );
}
