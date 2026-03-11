import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";

import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "euro": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };

  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={logo} alt="" className="logo" />
      </Link>
      <ul>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <li>Home</li>
        </Link>
        <Link to={"/pricing"} style={{ textDecoration: "none" }}>
          <li>Pricing</li>
        </Link>
        <Link to={"/blog"} style={{ textDecoration: "none" }}>
          <li>Blog</li>
        </Link>
        <Link to={"/features"} style={{ textDecoration: "none" }}>
          <li>Features</li>
        </Link>
      </ul>

      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="euro">EURO</option>
          <option value="inr">INR</option>
        </select>
        {/* <button>Sign up <img src={arrow_icon} alt="sign Up" /> </button> */}
      </div>
    </div>
  );
};

export default Navbar;
