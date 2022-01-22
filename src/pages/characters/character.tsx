// TODO: Character profile page
import React, {useReducer} from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../../components/Breadcrumbs';
import * as CharactersProvider from "../../contexts/CharactersContext";
import * as CharactersReducer from "../../contexts/CharactersReducer";

export default function CharacterPage() {
    const [state] = useReducer(
        CharactersReducer.default,
        CharactersProvider.initialState
      );

const {id} = useParams()
const character = state.characters[id]

console.log(state)

// Handle character not existing in context state

return (
    <div className='p-8 lg:p-16'>
        <Breadcrumbs />

        <h1 className="text-3xl font-semibold mb-8">{character.name}</h1>

        {/* TODO: Show the character's profile */}

    </div>
)

}