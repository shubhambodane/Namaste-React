import { CDN_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const RestaurentCard = (props) => {
  const { id, name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
    props?.info || {};

  return (
    <Link to={`/restaurants/${id}`} className="rest-card-link">
      <div className="rest-card" style={{ backgroundColor: '#f0f0f0' }}>
        <img
          className="rest-logo"
          alt="rest-logo"
          src={CDN_URL + cloudinaryImageId}
        ></img>
        <h3>{name}</h3>
        <h4>{cuisines?.join(', ')}</h4>
        <h4>{`${avgRating} stars`}</h4>
        <h4>{`${sla?.deliveryTime} minutes`}</h4>
        <h4>{`${costForTwo}`}</h4>
      </div>
    </Link>
  );
};

export default RestaurentCard;
