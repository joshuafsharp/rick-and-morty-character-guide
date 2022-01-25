/**
 * To assist with the reuse of common components that provide the layout of the webpage,
 * this React hook defines the layout that each page can use. In a larger application,
 * more layouts would be created to facilitate a different webpage structure or design.
 * For example, a payment page could have a simplified header to direct the customer's
 * focus to the main page content - which is paying for the product/service.
 *
 * 
 * NO LONGER RELEVANT
 * A common pattern in React is for a component to return multiple elements. Fragments
 * let you group a list of children without adding extra nodes to the DOM.
 * Fragments can be declared with the explicit <React.Fragment> syntax, or with the shorthand:
 * `<> </>`
 *
 * https://reactjs.org/docs/fragments.html
 */

import React from "react";
import Header from "../components/Header";

export default function DefaultLayout({ children }: any) {
  return (
    // Short hand syntax for declaring a react fragment.
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />

      <main className="max-w-screen-xl mx-auto w-full h-full bg-gray-100 flex-grow">{children}</main>
    </div>
  );
}
