import React, { useState, useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Restaurantcard = (props) => {
  const { resData } = props;
  const info = resData.info;

  const { loggedInUser } = useContext(UserContext);

  const imgUrl = CDN_URL + info.cloudinaryImageId;
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={
        "w-full bg-white rounded-[24px] overflow-hidden border transition-all duration-300 ease-in-out " +
        (isHover
          ? " -translate-y-2 shadow-[0_25px_45px_rgba(0,0,0,0.12)] border-gray-200"
          : " shadow-[0_10px_25px_rgba(0,0,0,0.08)] border-transparent")
      }
    >
      <div className="relative overflow-hidden">
        <div className="w-full h-[300px] overflow-hidden rounded-[24px]">
          <img
            src={imgUrl}
            alt="restaurant"
            className={
              "w-full h-full object-cover transition-transform duration-300 ease-in-out " +
              (isHover ? " scale-105" : " scale-100")
            }
          />
        </div>

        <div className="absolute bottom-4 left-4 bg-blue-600 text-white font-semibold text-[14px] px-5 py-2 rounded-xl shadow-md">
          ❄ Flat 10% OFF
        </div>
      </div>

      <div
        className={
          "p-6 transition duration-300 " + (isHover ? "bg-gray-50" : "bg-white")
        }
      >
        <div className="flex items-center justify-between">
          <h3 className="text-[22px] font-semibold text-[#1c1c1c] truncate">
            {info.name}
          </h3>

          <div className="px-3 py-1 rounded-md bg-[#267e3e] text-white text-[14px] font-bold">
            {info.avgRating}★
          </div>
        </div>

        <div className="mt-2 text-[16px] text-[#6b6b6b] truncate">
          {info.cuisines.join(", ")}
        </div>

        <div className="mt-1 text-[16px] text-[#9a9a9a] truncate">
          {info.locality}
        </div>

        <div className="mt-4 flex items-center justify-between text-[16px] font-medium text-[#444]">
          <span>{info.costForTwo}</span>
          <span>{info?.sla?.lastMileTravelString}</span>
        </div>

        <div className="mt-2 text-[13px] text-[#9a9a9a]">
          User: {loggedInUser}
        </div>
      </div>
    </div>
  );
};

// Higher Order Component
export const withPromoted = (WrappedCard) => {
  return function PromotedCard(props) {
    return (
      <div className="relative">
        <div
          className="
            absolute top-3 left-3 z-50
            bg-black/40 text-white
            text-xs font-medium
            px-2 py-[2px]
            rounded
            backdrop-blur-sm
          "
        >
          Promoted
        </div>

        <WrappedCard {...props} />
      </div>
    );
  };
};

export default Restaurantcard;
 