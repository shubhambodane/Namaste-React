import RestaurentCard from './RestaurentCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';

const Body = () => {
  // local state variable - super powerful variable
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState('');

  // whenever state variable is updated, react triggers a reconciliation cycle ( re-renders the component)
  // console.log('render');

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6226766&lng=73.7435228&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();

    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //conditional rendering
  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            style={{ marginLeft: '10px' }}
            onClick={() => {
              // filter the restaurant cards and update the UI
              const filteredRestaurants = restaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-Btn"
          onClick={() => {
            const filteredRestaurants = restaurants.filter(
              (rest) => parseFloat(rest.data.avgRating) > 3.8
            );
            setFilteredRestaurants(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurentCard key={restaurant.data.id} {...restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
