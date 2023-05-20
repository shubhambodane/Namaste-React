import RestaurentCard from "./RestaurentCard";
import restaurants from "../utils/mockData.json";

const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search </div>
      <div className="rest-container">
        {restaurants.map((restaurant) => (
          <RestaurentCard key={restaurant.data.id} {...restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
