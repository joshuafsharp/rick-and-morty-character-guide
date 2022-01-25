import React, { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CharactersPagination from "../../components/character/Pagination";
import Breadcrumbs from "../../components/Breadcrumbs";
import CharacterList from "../../components/character/CharacterList";
import { fetchAllCharacters } from "../../state/actions";
import * as CharactersContext from "../../state/context";

export default function CharactersPage() {
  // Full page load requires fetching all the characters data

  const { characters, fetchingCharacters, dispatch } = useContext(
    CharactersContext.CharactersContext
  );

  const [searchParams] = useSearchParams();
  let page = 1;
  try {
    page = parseInt(searchParams.get("page"), 10);
    
    if (Number.isNaN(page)) {
      page = 1
    }
  } catch (e) {
    page = 1;
    // no-op
  }


  const initCharacters = async () => {
    const response = await fetchAllCharacters(page);

    dispatch({
      type: "FETCH_ALL_CHARACTERS",
      payload: {
        ...response,
        currentPage: page,
      },
    });
  };

  useEffect(() => {
    initCharacters();

    document.title = `All the Characters | Rick and Morty Character Guide`;
  }, []);

  const breadcrumbLinks = [
    {
      label: "Characters",
      path: "/characters",
    },
  ];

  return (
    <div className="p-8 lg:p-16">
      <Breadcrumbs links={breadcrumbLinks} />

      <h1 className="mb-8 text-3xl font-semibold text-gray-900">Characters</h1>

      {fetchingCharacters ? (
        <div className="flex justify-center mt-10">Loading...</div>
      ) : (
        <>
          <CharacterList characters={Object.values(characters)} />

          <CharactersPagination />
        </>
      )}
    </div>
  );
}
