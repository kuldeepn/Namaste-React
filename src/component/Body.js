import RestoCard from "./RestoCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [topRes, setTopRes] = useState(resList);

  const handleFilter = () => {
    let latestTopRes = resList.filter((res) => res.info.avgRating > 4);

    console.log(latestTopRes);
    setTopRes(latestTopRes);
  };

  return (
    <div className="body">
      {/* This is JSX comment */}
      <div className="search">
        <button className="filter-btn" onClick={handleFilter}>
          Filter Top Restaurants
        </button>
      </div>
      <div className="res-container">
        {topRes.map((restaurant) => (
          <RestoCard key={restaurant.info.id} resInfo={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
