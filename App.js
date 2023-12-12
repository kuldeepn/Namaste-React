import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";

/*
Header
 --Logo
 --Nav Items
Body
--Search
--RestaurantContainer
  --RestaurantCard
Footer
--Copyright
--Address
--Contact 
*/

const Header = () => {
  return (
    <div className="header">
      <img src="https://icons.iconarchive.com/icons/sonya/swarm/256/Fast-Food-icon.png" />

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <img src="https://png.pngtree.com/png-vector/20230412/ourmid/pngtree-food-cart-line-icon-vector-png-image_6701298.png" />
        </ul>
      </div>
    </div>
  );
};

const RestoCard = () => {
  return (
    <div className="card">
      <img src="https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg" />
      <h2>Mughal Mehal</h2>
      <h3>Biryani, Hyderabad</h3>
      <h4>ETA 38 min</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
