import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useMenuItems from "../utils/useMenuItems";
import ItemCategory from "./ItemCategory";

const RestMenu = () => {
  const { resId } = useParams();
  const resItem = useMenuItems(resId);

  if (resItem === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resItem?.cards[0]?.card?.card?.info;

  const filteredItems =
    resItem?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center m-4 ">
      <h1 className="font-bold text-2xl">{name}</h1>
      <p className="font-thin">
        {cuisines.join(", ")} {costForTwoMessage}
      </p>

      {filteredItems.map((cat) => (
        <ItemCategory data={cat.card.card} key={cat.card.card.title} />
      ))}
    </div>
  );
};

export default RestMenu;
