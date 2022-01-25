/**
 * To assist with the reuse of common components that provide the layout of the webpage,
 * this React hook defines the layout that each page can use. In a larger application,
 * more layouts would be created to facilitate a different webpage structure or design.
 * For example, a payment page could have a simplified header to direct the customer's
 * focus to the main page content - which is paying for the product/service.
 */

import React, { useContext } from 'react';
import { CharactersContext } from '../state/context';
import CharactersFilterOverlay from '../components/character/FilterOverlay';
import Header from '../components/Header';

export interface DefaultLayoutProps {
  children: JSX.Element | JSX.Element[];
}

export default function DefaultLayout({ children }: DefaultLayoutProps): JSX.Element {
  const { filterOverlayOpen } = useContext(CharactersContext);

  return (
    // Short hand syntax for declaring a react fragment.
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="max-w-screen-xl mx-auto w-full h-full flex-grow">{children}</main>

      {filterOverlayOpen ? <CharactersFilterOverlay /> : null}
    </div>
  );
}
