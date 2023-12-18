import RestoCard from "./RestoCard";
import { resList } from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      {/* This is JSX comment */}
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestoCard key={restaurant.info.id} resInfo={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
