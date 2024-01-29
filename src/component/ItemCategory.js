const ItemCategory = ({ category }) => {
  // console.log(props);

  const handleClick = () => {
    category();
  };
  return (
    <div className="mt-28 bg-gray-200 w-6/12 mx-auto p-2">
      <button onClick={handleClick}>Recomended</button>
    </div>
  );
};

export default ItemCategory;
