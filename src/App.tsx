import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/Default';
import CharactersPage from './pages/characters';
import CharacterPage from './pages/characters/character';
import HomePage from './pages/index';
import { ContextProvider } from './state/context';

export default function App(): JSX.Element {
  return (
    <ContextProvider>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/characters/:id" element={<CharacterPage />} />
        </Routes>
      </DefaultLayout>
    </ContextProvider>
  );
}
