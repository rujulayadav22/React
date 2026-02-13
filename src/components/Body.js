import Restaurantcard from "./Restaurantcard"; 
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";

const Body = () => {

  const [list, setList] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const Onlinestatus = useOnlinestatus();

  // Offline UI
  if (Onlinestatus === false) {
    return (
      <h1>
        Looks like you are Offline! <br />
        Please check Internet Connection
      </h1>
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      const resList = json?.data?.cards?.find(
        (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setList(resList || []);
      setFilterRes(resList || []);
    } catch (error) {
      console.log("error:", error);
    }
  };

  // Loading shimmer
  if (list.length === 0) return <Shimmer />;

  return (
    <div className="body">

      <div className="filter">
        <div className="search">
          <input 
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button onClick={() => {
            const filtered = list.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterRes(filtered);
          }}>
            Search
          </button>
        </div>

        <button className="filter-btn" onClick={() => {
          const filtered = list.filter((res) => res.info.avgRating > 4);
          setFilterRes(filtered);
        }}>
          Filters
        </button>
      </div>

      <div className="search-top">Top brands for you</div>

      <div className="res-container">
        {filterRes.map((restaurant) => (
          <Link key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}>
            <Restaurantcard resData={restaurant} />
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Body;



