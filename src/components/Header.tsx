import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className=" p-4 border-b bg-white">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <Link to="/">
          <Logo />
        </Link>

        <div className="flex">
          <Link to="/" className="mr-4 text-blue-600 hover:text-blue-400 font-medium">Home</Link>
          <Link to="characters" className=" text-blue-600 hover:text-blue-400 font-medium">Characters</Link>
        </div>
      </div>
    </header>
  );
}
