import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestMenu = () => {
  const [resItem, setResItem] = useState(null);
  console.log(useState());

  const { resId } = useParams();

  useEffect(() => {
    restMenuData();
  }, []);

  const restMenuData = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();

    setResItem(json.data);
  };

  if (resItem === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resItem?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resItem?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} {costForTwoMessage}
      </p>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} :{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100} ₹
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestMenu;
