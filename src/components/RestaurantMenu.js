import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { SWIGGY_MENU_API } from '../utils/constants';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const [isError, setIsError] = useState(false);

  const fetchMenu = async () => {
    try {
      const url = SWIGGY_MENU_API(resId);
      const data = await fetch(url);
      const json = await data.json();
      setResInfo(json || {});
    } catch (error) {
      console.error('Failed to fetch menu:', error);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  if (isError) {
    return (
      <div className="menu">
        <p>Unable to load restaurant menu. Please try again later.</p>
      </div>
    );
  }

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name = '',
    cuisines = [],
    costForTwoMessage = '',
  } = resInfo?.cards?.[0]?.card?.card?.info ?? {};

  return (
    <div className="menu">
      <p>Hello, this is the restaurant menu!</p>
      <h1>{name}</h1>
      <h3>{cuisines.join(', ')}</h3>
      <h3>{costForTwoMessage}</h3>
    </div>
  );
};

export default RestaurantMenu;
