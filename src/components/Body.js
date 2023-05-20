import RestaurentCard from './RestaurentCard';
import list from '../utils/mockData.json';
import { useState } from 'react';

const Body = () => {
  // local state variable - super powerful variable
  const [restaurants, setRestaurants] = useState(list);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-Btn"
          onClick={() => {
            const filteredRestaurants = restaurants.filter(
              (rest) => parseFloat(rest.data.avgRating) > 3.8
            );
            setRestaurants(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
        {restaurants.map((restaurant) => (
          <RestaurentCard key={restaurant.data.id} {...restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
