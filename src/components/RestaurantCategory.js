import { useState } from 'react';
import ItemList from './ItemList';

export const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* Header*/}
      <div className="mx-auto my-4 w-6/12 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer bg-gray-100 rounded-lg"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
