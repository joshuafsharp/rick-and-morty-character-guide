import React, { useContext } from 'react';
import { CharactersContext } from '../../state/context';

export default function CharactersFilterButton() {
  const { dispatch } = useContext(CharactersContext);
  const openFilterOverlay = () => {
    dispatch({
      type: 'TOGGLE_FILTER_OVERLAY',
      payload: true,
    });
  };

  return (
    <button
      type="button"
      onClick={openFilterOverlay}
      className="w-full sm:w-20 h-10 border font-medium text-blue-700 bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded"
    >
      Filter
    </button>
  );
}
