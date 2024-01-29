const MenuItems = ({ menuData }) => {
  return (
    <div>
      <div className="flex p-2 ">
        <span className=" font-sans font-medium">{menuData.name}</span>
      </div>
      <div className="flex p-2 font-thin font-sans">
        ₹{menuData.price / 100}
      </div>
    </div>
  );
};

export default MenuItems;
