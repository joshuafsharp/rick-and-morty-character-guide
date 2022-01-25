import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { EmojiHappyIcon, EmojiSadIcon } from "@heroicons/react/solid";
import Breadcrumbs from "../../components/Breadcrumbs";
import * as CharactersContext from "../../state/context";
import { fetchCharacterById } from "../../state/actions";

export default function CharacterPage() {
  const { characters, dispatch } = useContext(
    CharactersContext.CharactersContext
  );

  const { id } = useParams();
  let character = characters[id];

  // The character hasn't been fetched yet.
  if (!character) {
    const initCharacters = async () => {
      const response = await fetchCharacterById(id);

      dispatch({
        type: "FETCH_CHARACTER",
        payload: response,
      });

      character = characters[id];
    };

    useEffect(() => {
      initCharacters();
    }, []);
  }

  if (!character) {
    return (
      <div className="flex w-full h-screen items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  useEffect(() => {
    document.title = `${character.name} | Rick and Morty Character Guide`;
  }, []);

  
  const breadcrumbLinks = [
    {
      label: 'Characters',
      path: '/characters'
    },
    {
        label: character.name,
        path: `/characters/${character.id}`
    }
  ]

  return (
    <div className="w-full p-8 lg:p-16">
      <Breadcrumbs links={breadcrumbLinks} />

      <div className="flex flex-col sm:flex-row lg:flex-nowrap">
        <div>
          <img src={character.image} alt={character.name} />
        </div>

        <div className="sm:ml-8">
          <h1 className="text-3xl font-semibold mb-8 text-gray-700">
            {character.name}
          </h1>

          <p className="text-gray-500 font-medium">Status</p>
          <p className="flex items-center mb-4">
            <span className="mr-1">{character.status}</span>{" "}
            {character.status === "Alive" ? (
              <EmojiHappyIcon
                className="flex-shrink-0 h-5 w-5 text-green-500"
                aria-hidden="true"
              />
            ) : (
              <EmojiSadIcon
                className="flex-shrink-0 h-5 w-5 text-red-500"
                aria-hidden="true"
              />
            )}
          </p>

          <p className="text-gray-500 font-medium">Species</p>
          <p className="mb-4">{character.species}</p>

          {character.type !== "" ? (
            <>
              <p className="text-gray-500 font-medium">Type</p>
              <p className="mb-4">{character.type}</p>
            </>
          ) : null}

          <p className="text-gray-500 font-medium">Origin</p>
          <p className="mb-4">{character.origin.name}</p>

          <p className="text-gray-500 font-medium">Location</p>
          <p className="mb-4">{character.location.name}</p>

          <p className="text-gray-500 font-medium">Gender</p>
          <p className="mb-4">{character.gender}</p>

          <p className="text-gray-500 font-medium">Profile Created</p>
          <p className="mb-4">
            {new Date(character.created).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
