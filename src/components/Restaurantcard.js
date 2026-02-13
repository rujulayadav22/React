import React from "react";
import { CDN_URL } from "../utils/constants";


const Restaurantcard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId } = resData.info; 

     const imgUrl = 
     CDN_URL + cloudinaryImageId;

  return (
    <div className="res-card">
      <div className="res-img-container">
        <img className="res-img" alt="res-logo" src={imgUrl} />
        <button className="add-btn">Add to Cart</button>
      </div>

      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>⭐ {resData.info.avgRating}</h4>
      <h4>{resData.info.locality}</h4>
    </div>
  );
};

 export default Restaurantcard;