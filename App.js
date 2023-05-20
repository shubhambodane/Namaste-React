import React from "react";
import ReactDOM from "react-dom/client";

const restaurants = require("./data/data.json");

/**
 * AppLayout
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurentContainer
 * - RestaurentCard 
    - Img
    - Name
    - Star Rating
    - cuisine
    - delivery time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="Namaste App"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurentCard = (props) => {
  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
    cloudinaryImageId,
  } = props?.data;
  return (
    <div className="rest-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="rest-logo"
        alt="rest-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
          cloudinaryImageId
        }
      ></img>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{`${avgRating} stars`}</h4>
        <h4>{`${deliveryTime} minutes`}</h4>
        <h4>{`₹${costForTwo / 100} for two`}</h4>
      </div>
    </div>
  );
};

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

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
