import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { GET_ALL_RESTAURANTS } from '../utils/constants';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  // local state variable - super powerful variable
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState('');

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1>
        {' '}
        Looks like you are offline!! Please check your internet connection
      </h1>
    );
  }

  //conditional rendering
  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className=" flex items-center">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 m-4 bg-green-100 rounded-lg"
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
        <div className="search m-4 p-4 ">
          <button
            className="px-4 py-2 m-4 bg-green-100 rounded-lg"
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
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <div key={restaurant?.info?.id}>
            {restaurant?.info?.promoted ? (
              <RestaurantCardPromoted {...restaurant} />
            ) : (
              <RestaurantCard {...restaurant} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
