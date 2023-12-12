import ReactDOM from "react-dom/client";
import React from "react";

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

const AppLayout = () => {
  return (
    <div>
      <h1>Helloh</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
