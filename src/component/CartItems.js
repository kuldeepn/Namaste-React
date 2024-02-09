import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const CartItems = ({ cartData }) => {
  console.log(cartData);

  return (
    <div className="flex flex-row max-w-sm mx-auto bg-slate-200 rounded-md shadow-2xl">
      <span>
        <img
          src={CDN_URL + cartData.menuData.imageId}
          className="w-14 shadow-sm rounded-xl mt-2 mx-2 mb-2"
        ></img>
      </span>
      <span className="mx-4 mt-5 mb-2 font-roboto">
        {cartData.menuData.name}
      </span>
    </div>
  );
};

export default CartItems;
