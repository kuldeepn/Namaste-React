import "./Header.css";
import netflix from "./netflix.svg";
import user from "./images.png";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={netflix} alt="Logo" />
      </div>
      <div className="searchbar">
        <input type="search" placeholder="...Search"></input>
        <button>Search</button>
      </div>
      <div>
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
