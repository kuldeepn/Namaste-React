import { useState } from "react";
import { LOGO, CART } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  return (
    <div className="header">
      <Link to={"/"}>
        <img src={LOGO} className="header-image" />
      </Link>

      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} style={{ textDecoration: "none" }}>
              About Us
            </Link>
          </li>
          <li>
            <Link to={"/contact"} style={{ textDecoration: "none" }}>
              Contact Us
            </Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              onClick={() => {
                newName = "Logout";
                btnName === "Login" ? setbtnName(newName) : setbtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
