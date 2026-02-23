import React, { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"; 
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex items-center px-12 py-[14px] bg-white border-b border-[#f0f0f0]">
      
      {/* Logo */}
      <div className="w-[150px]">
        <img
          src={LOGO_URL}
          alt="logo"
          className="w-[150px] h-auto object-contain"
        />
      </div>

      {/* Search */}
      <div className="flex justify-center flex-1">
        <div className="w-[80%]">
          <Search />
        </div>
      </div>

      {/* Navigation */}
      <div className="nav">
        <div className="flex">
          <ul className="flex items-center gap-8">

            <li className="text-[16px] font-medium text-gray-600">
              {onlineStatus ? "🟢 Online" : "🔴 Offline"}
            </li>

            <li className="text-[16px] font-medium text-gray-600">
              User: <span className="text-[#ef4f5f]">{loggedInUser}</span>
            </li>

            <li>
              <Link
                to="/"
                className="text-[19px] font-medium cursor-pointer text-gray-600 hover:!text-[#ef4f5f]"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-[19px] font-medium cursor-pointer text-gray-600 hover:!text-[#ef4f5f]"
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                to="/cart"
                className="text-[19px] font-medium cursor-pointer text-gray-600 hover:!text-[#ef4f5f]"
              >
                Cart({cartItems.length} items)
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="text-[19px] font-medium cursor-pointer text-gray-600 hover:!text-[#ef4f5f]"
              >
                About Us
              </Link>
            </li>

            <button
              className="text-[17px] font-medium text-gray-600 hover:!text-[#ef4f5f]"
              onClick={() => {
                setbtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
              }}
            >
              {btnNameReact}
            </button>

          </ul>
        </div>
      </div>
    </div>
  );
};

const Search = () => {
  return (
    <div className="search-bar flex items-center bg-white px-[18px] py-[16px] rounded-[14px] w-full shadow-[2px_2px_2px_2px_rgba(0,0,0,0.08)] mb-[5px]">
      
      <div className="location flex items-center gap-[6px] font-medium text-[#ef4f5f]">
        <img
          className="location-icon w-[20px] h-[20px] object-contain"
          src="https://image2url.com/r2/default/images/1769363792219-d401756d-6ea8-498a-b442-8141d1b971d4.png"
          alt="location"
        />
        <span>Mumbai</span>
      </div>

      <div className="divider w-[1px] h-[24px] bg-[#ddd] mx-[12px]"></div>

      <div className="search-input flex items-center gap-[8px] flex-1">
        <img
          className="search-icon w-[20px] h-[20px] object-contain"
          src="https://image2url.com/r2/default/images/1769365713543-df2686b1-33cc-4a38-b591-61d9f6ec5710.png"
          alt="search"
        />
        <input
          type="text"
          placeholder="Search for restaurant, cuisine or a dish"
          className="border-none outline-none w-full text-[15px]"
        />
      </div>

    </div>
  );
};

export default Header;