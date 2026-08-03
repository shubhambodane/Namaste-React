import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { GET_ALL_RESTAURANTS } from '../utils/constants';

const Body = () => {
  // local state variable - super powerful variable
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState('');

  // whenever state variable is updated, react triggers a reconciliation cycle ( re-renders the component)
  // console.log('render');

  const fetchData = async () => {
    const data = await fetch(GET_ALL_RESTAURANTS);
    const json = await data.json();
    const restaurantList =
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    console.log('Fetched Restaurants:', restaurantList);
    setRestaurants(restaurantList);
    setFilteredRestaurants(restaurantList);
  };

  // If no dependency array  ==> useEffect is called on every component render
  // If the dependency array is empty = [] => useEffect is called on only initial render ( just once )
  useEffect(() => {
    fetchData();
  }, []);

  //conditional rendering
  return restaurants?.length === 0 ? (
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
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
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
              (rest) => parseFloat(rest.info.avgRating) > 4.5,
            );
            setFilteredRestaurants(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} {...restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
