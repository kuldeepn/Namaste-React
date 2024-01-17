import { useState, useEffect } from "react";
import { REST_API } from "./constants";

const useRestaurant = () => {
  const [topRes, setTopRes] = useState([]);
  const [searchRes, setSearchRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(REST_API);
      const json = await data.json();
      setTopRes(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setSearchRes(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      alert("Error in data fetching");
    }
  };

  return { topRes, searchRes };
};

export default useRestaurant;
