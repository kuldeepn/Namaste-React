import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useMenuItems from "../utils/useMenuItems";

const RestMenu = () => {
  const { resId } = useParams();
  const resItem = useMenuItems(resId);

  if (resItem === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resItem?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resItem?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="text-center m-4 ">
      <h1 className="font-bold text-2xl">{name}</h1>
      <p className="font-thin font-semibold">
        {cuisines.join(", ")} {costForTwoMessage}
      </p>
    </div>
  );
};

export default RestMenu;
