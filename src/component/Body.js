import RestoCard from "./RestoCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [topRes, setTopRes] = useState([]);
  const [searchTxt, setSearchTxt] = useState([]);
  const [searchRes, setSearchRes] = useState([]);

  const handleFilter = () => {
    let latestTopRes = searchRes.filter((res) => res.info.avgRating > 4);
    setSearchRes(latestTopRes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5904779&lng=73.7271909&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setTopRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // *Conditonal rendering
  return topRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* This is JSX comment */}
      <div className="search">
        <input
          type="text"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            const filteredRes = topRes.filter((res) =>
              res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
            );
            setSearchRes(filteredRes);
          }}
        >
          Search
        </button>
        <button className="filter-btn" onClick={handleFilter}>
          Filter Top Restaurants
        </button>
      </div>
      <div className="res-container">
        {searchRes.map((rest) => {
          return <RestoCard key={rest.info.id} resInfo={rest} />;
        })}
      </div>
    </div>
  );
};

export default Body;
