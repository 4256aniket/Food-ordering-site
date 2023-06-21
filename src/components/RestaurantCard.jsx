import React from "react";
import "./restaurantcard.css";

const RestaurantCard = ({name, cloudinaryImageId, cuisines,lastMileTravel}) => {
  return <div className="restaurant-card">
    <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${cloudinaryImageId}`} alt="" />
    <h2>{name}</h2>
    <h3>{cuisines.join(", ")}</h3>
    <h4>{lastMileTravel.toFixed(2)} Kms minutes</h4>
  </div>;
};

export default RestaurantCard;
