import RestoCard from "./RestoCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurant from "../utils/useRestaurant";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState([]);
  const { topRes, searchRes } = useRestaurant();
  const online = useOnlineStatus();

  const handleFilter = () => {
    let latestTopRes = searchRes.filter((res) => res.info.avgRating > 4);
    setSearchRes(latestTopRes);
  };

  console.log(topRes);

  if (!online) {
    return <h1>You are Offline please check your internet</h1>;
  }

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
          return (
            <Link
              to={"/restmenu/" + rest.info.id}
              key={rest.info.id}
              style={{ textDecoration: "none" }}
            >
              <RestoCard resInfo={rest} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
