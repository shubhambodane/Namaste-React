import { CDN_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const RestaurentCard = (props) => {
  const { id, name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
    props?.info || {};

  return (
    <Link to={`/restaurants/${id}`}>
      <div
        className="m-4 p-4 w-[256px] rounded-lg cursor-pointer bg-[#f0f0f0]
        hover:bg-gray-400"
      >
        <img
          className="rounded-md"
          alt="rest-logo"
          src={CDN_URL + cloudinaryImageId}
        ></img>
        <h3 className="font-bold py-4 text-lg ">{name}</h3>
        <h4 className="italic my-2">{cuisines?.join(', ')}</h4>
        <h4 className="font-bold">{`${avgRating} *`}</h4>
        <h4 className="my-2">{`${sla?.deliveryTime} minutes`}</h4>
        <h4 className="my-2">{`${costForTwo}`}</h4>
      </div>
    </Link>
  );
};

export default RestaurentCard;
