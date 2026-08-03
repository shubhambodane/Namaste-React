import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { GET_RESTAURANT_MENU } from '../utils/constants';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const [isError, setIsError] = useState(false);

  const fetchMenu = async () => {
    try {
      const url = GET_RESTAURANT_MENU(resId);
      const data = await fetch(url);
      const json = await data.json();
      setResInfo(json);
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
  } = resInfo?.data?.cards?.[2].card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards?.[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li>
            {item.card.info.name} - ₹{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
