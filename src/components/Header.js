import React from "react";
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
      
      const [btnNameReact, setbtnNameReact] =useState("Login");

  return (
    <div className="header">
      <div className="logo">
        <img
          src={LOGO_URL}
          alt="logo"
        />
      </div>

      <Search />

      <div className="nav">
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/about">Home</Link>
            </li>
            <li>
              <Link to="/about">Contact Us</Link>
            </li>
            <li>
              <Link to="/about">Cart</Link>
            </li>
            <li>
             <Link to="/about">About Us</Link>
            </li> 
            <button className="login"
            onClick={() =>{
                 setbtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
            }}> 
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
    <div className="search-bar">
      <div className="location">
        <img
          className="location-icon"
          src="https://image2url.com/r2/default/images/1769363792219-d401756d-6ea8-498a-b442-8141d1b971d4.png"
          alt="location"
        />
        <span>Mumbai</span>
      </div>

      <div className="divider"></div>

      <div className="search-input">
        <img
          className="search-icon"
          src="https://image2url.com/r2/default/images/1769365713543-df2686b1-33cc-4a38-b591-61d9f6ec5710.png"
          alt="search"
        />
        <input type="text" placeholder="Search for restaurant, cuisine or a dish" />
      </div>
    </div>
  );
};
export default Header;




