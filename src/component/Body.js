import RestoCard from "./RestoCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurant from "../utils/useRestaurant";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState([]);
  const[filter,setFilter]=useState([]) // *uses for data cleaning the data receiving from useRestaurant
  const { topRes, searchRes } = useRestaurant();
  const online = useOnlineStatus();

  const handleFilter = () => {
    let latestTopRes = searchRes.filter((res) => res.info.avgRating > 4);
    setFilter(latestTopRes);
  };

  console.log(topRes);

  if (!online) {
    return <h1>You are Offline please check your internet</h1>;
  }

  // *Conditonal rendering
  return topRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-4 m-4">
      {/* This is JSX comment */}
      <div className="p-4 m-4 text-center">
        <input className="border border-slate-400 rounded-md focus:outline-none focus:ring-0 focus:border-orange-500 px-2 py-1"
          type="text"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        ></input>
        <button className="px-2 py-1 mx-3 bg-orange-500 rounded-sm text-slate-50 hover:bg-orange-600"
          onClick={() => {
            const filteredRes = topRes.filter((res) =>
              res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
            );
            setFilter(filteredRes);
          }}
        >
          Search
        </button>
        <button className="px-2 py-1 mx-3 bg-orange-500 rounded-sm text-slate-50 hover:bg-orange-600" onClick={handleFilter}>
          Filter Top Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {(filter.length===0?searchRes:filter).map((rest) => {
          return (
            <Link
              to={"/restmenu/" + rest.info.id}
              key={rest.info.id}
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
