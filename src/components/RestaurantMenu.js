import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const fetchMenu = async () => {
    const url =
      'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.620047&lng=73.7441082&restaurantId=1285671&catalog_qa=undefined&submitAction=ENTER';
    const data = await fetch(url);
    // const json = await data?.json();
    setResInfo(data || null);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[0]?.card?.card?.info ?? {};

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <p> Hello, this is the restaurant menu!</p>
      {/* <h1> {name}</h1>
      <h3> {cuisines.join(', ')} </h3>
      <h3> {costForTwoMessage}</h3> */}
    </div>
  );
};

export default RestaurantMenu;
