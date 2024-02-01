import MenuItems from "./MenuItems";

const ItemCategory = ({ data, showItem, setShowItem }) => {
  console.log(data);

  const accordianHandler = () => {
    setShowItem();
  };

  return (
    <div className="bg-gray-200 w-6/12 mx-auto">
      <div
        className="mt-11  p-2 flex justify-between cursor-pointer"
        onClick={accordianHandler}
      >
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇</span>
      </div>
      {showItem &&
        data.itemCards.map((item) => (
          <MenuItems
            menuData={item.card.info}
            key={item.card.info.id}
            className="border-b-2"
          />
        ))}
    </div>
  );
};

export default ItemCategory;
