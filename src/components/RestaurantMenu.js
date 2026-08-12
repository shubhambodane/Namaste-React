import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { GET_RESTAURANT_MENU } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { RestaurantCategory } from './RestaurantCategory';
import { useState } from 'react';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo) {
    return <Shimmer />;
  }

  const {
    name = '',
    cuisines = [],
    costForTwoMessage = '',
  } = resInfo?.cards?.[2].card?.card?.info;

  // console.log('Restaurant Info:', resInfo);

  const { itemCards } =
    resInfo?.cards?.[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  // console.log('Menu Items:', itemCards);

  const categories =
    resInfo?.cards?.[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
    );
  // console.log('Item Categories:', categories);

  return (
    <div className="text-center">
      <h1 className=" font-bold my-4 text-2xl ">{name}</h1>
      <p className="font-semibold text-lg">
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>
      {/* categories accordion */}
      {categories?.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() =>
            setShowIndex((prev) => (prev === index ? null : index))
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
