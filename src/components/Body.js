import Restaurantcard, { withPromoted } from "./Restaurantcard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext";

const PromotedRestaurantCard = withPromoted(Restaurantcard);

const Body = () => {
  const [list, setList] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const Onlinestatus = useOnlinestatus();
  const { loggedInUser, setUserName } = useContext(UserContext);

  if (Onlinestatus === false) {
    return (
      <div className="text-center mt-20 text-xl">
        Looks like you are Offline!
      </div>
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const resList = json?.data?.cards?.find(
      (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setList(resList || []);
    setFilterRes(resList || []);
  };

  if (list.length === 0) return <Shimmer />;

  return (
    <div className="px-[60px] py-[30px] bg-white">

      {/* 🔹 Top Controls Row */}
      <div className="flex items-center gap-6 mb-10">

        {/* Search Section */}
        <div className="flex items-center gap-4">
          <input
            type="text"
            className="w-[220px] h-[40px] border border-gray-300 rounded-md px-3 outline-none"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="px-5 py-2 rounded-md bg-green-200 font-semibold"
            onClick={() => {
              const filtered = list.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilterRes(filtered);
            }}
          >
            Search
          </button>
        </div>

        {/* Top Rated Button */}
        <button
          className="px-6 py-2 rounded-md bg-gray-100 font-semibold"
          onClick={() => {
            const filtered = list.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilterRes(filtered);
          }}
        >
          Top Rated Restaurants
        </button>

        {/* 🔹 User Profile Section */}
        <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-xl shadow-sm border border-gray-200 ml-auto">
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-green-500 text-white font-bold text-sm">
            {loggedInUser?.charAt(0).toUpperCase()}
          </div>

          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-medium">
              Logged in as
            </span>
            <input
              className="bg-transparent outline-none font-semibold text-gray-800"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>

      </div> {/* ✅ THIS WAS MISSING */}

      {/* 🔹 Heading */}
      <div className="text-[38px] font-extrabold text-[#1c1c1c] mb-10">
        Restaurants in Mumbai
      </div>

      {/* 🔹 Restaurant Grid */}
      <div className="grid grid-cols-4 gap-8">
        {filterRes.map((restaurant) => {
          const isPromoted =
            !!restaurant.info?.aggregatedDiscountInfoV3?.header;

          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
              className="block"
            >
              {isPromoted ? (
                <PromotedRestaurantCard resData={restaurant} />
              ) : (
                <Restaurantcard resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>

    </div>
  );
};

export default Body;