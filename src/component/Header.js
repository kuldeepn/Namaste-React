import { useState } from "react";
import { LOGO, CART } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between">
      <Link to={"/"}>
        <img src={LOGO} className="header-image" />
      </Link>

      <div className="flex">
        <ul>
          <li>Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
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
            <Link to={"/login"}>
              <button
                onClick={() => {
                  newName = "Logout";
                  btnName === "Login"
                    ? setbtnName(newName)
                    : setbtnName("Login");
                }}
              >
                {btnName}
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
