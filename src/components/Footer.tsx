import React from 'react';

export default function Footer(): JSX.Element {
  return (
    <div className="flex justify-center items-center p-8 bg-gray-50 text-sm text-gray-700">
      {`Rick and Morty Character Guide ${new Date().getFullYear()}`}
    </div>
  );
}
