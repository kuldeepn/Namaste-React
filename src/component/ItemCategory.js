import { useState } from "react";
import MenuItems from "./MenuItems";

const ItemCategory = ({ data }) => {
  const [hide, setHide] = useState(false);

  const accordianHandler = () => {
    setHide(!hide);
  };

  return (
    <div className="bg-gray-200 w-6/12 mx-auto">
      <div
        className="mt-14  p-2 flex justify-between cursor-pointer"
        onClick={accordianHandler}
      >
        <span className="font-bold">
          {data.title}({data.length})
        </span>
        <span>⬇</span>
      </div>
      {hide &&
        data.itemCards.map((item) => (
          <MenuItems menuData={item.card.info} key={item.card.info.id} />
        ))}
    </div>
  );
};

export default ItemCategory;
