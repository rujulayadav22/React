

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  const { name, cuisines, avgRatingString } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const regularCards =
    resInfo?.cards
      ?.find((c) => c.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const categories = regularCards.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  if (!resInfo) return <Shimmer />;

  return (
    <div className="w-6/12 mx-auto my-8">
      <h1 className="font-bold text-3xl mb-2">{name}</h1>
      <p className="text-lg mb-6">
        {cuisines?.join(", ")} - ⭐ {avgRatingString}
      </p>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;