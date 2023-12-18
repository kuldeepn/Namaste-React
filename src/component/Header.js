import { LOGO, CART } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <img src={LOGO} />

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <img src={CART} />
        </ul>
      </div>
    </div>
  );
};

export default Header;
